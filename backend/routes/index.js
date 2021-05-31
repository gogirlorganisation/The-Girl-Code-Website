const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");

require("./../models/chapter");
require("./../models/workshop");
require("./../models/user");

const Chapter = mongoose.model("Chapter");
const Workshop = mongoose.model("Workshop");
const User = mongoose.model("User");

//create a chapter
router.post(
  "/create-chapter",
  //upload.single('image'),
  async (req, res, next) => {
    console.log(req.body);
    const {
      chapterName,
      description,
      image,
      carouselImages,
    } = req.body;
    console.log("hi");
    try {
      const chapter = await Chapter.create({
        chapterName,
        description,
        image,
        carouselImages,
      });
      res.status(200).json({ message: "chapter created", chapter, done: true });
    } catch (error) {
      console.log(error);
      //next();
    }
  }
);

//get all chapters
router.get("/chapters", async (req, res) => {
  try {
    let stat1, stat2, stat3, arr = []
    const chapters = await Chapter.find({});
    const workshops = await Workshop.find({})
    console.log(chapters, workshops)
    stat1 = chapters.length
    stat3 = workshops.length
    chapters.map((chapter) => {
      arr.push(chapter.flagshipStatValue2)
    })
    console.log(arr)
    stat2 = arr.reduce((a, b) => a + b, 0)
    console.log(stat1, stat2, stat3)
    res.json({ message: "chapters fetched", chapters, done: true, stat1, stat2, stat3 });
  } catch (error) {
    console.log(error);
  }
});

//get a particular chapter
router.get("/chapter/:chapterId", async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.chapterId).populate(
  [
    {
      path: "workshops",
      select: "workshopName description image dates courseName courseIcon flagshipStatValue2 flagshipStatValue1"
    }, 
    {
      path: 'team',
      select: 'name image designation'
    }])
    const workshops = chapter.workshops
    let stat1, stat2, stat3, hours = [], participants = []
    stat1 = workshops.length
    workshops.map((workshop) => {
      hours.push(workshop.flagshipStatValue2)
      participants.push(workshop.flagshipStatValue1)
    })
    stat2 =  participants.reduce((a, b) => a + b, 0)
    stat3 =  hours.reduce((a, b) => a + b, 0)
    chapter.flagshipStatValue1 = stat1
    chapter.flagshipStatValue2 = stat2
    chapter.flagshipStatValue3 = stat3
    await chapter.save()
    res.status(200).json({ message: "ChapterFetched!", done: true, chapter });
  } catch (error) {
    console.log(error);
  }
});

//create a worksop
router.post("/create-workshop", async (req, res, next) => {
  console.log(req.body, "hi");
  const {
    workshopName,
    flagshipStatValue1,
    flagshipStatValue2,
    flagshipStatValue3,
    description,
    image,
    carouselImages,
    testimonials,
    project,
    LOR,
    chapterId,
    courseName,
    courseIcon,
    dates,
  } = req.body;
  try {
    console.log(req.body);
    const workshop = await Workshop.create({
      workshopName,
      flagshipStatValue1,
      flagshipStatValue2,
      flagshipStatValue3,
      description,
      image,
      carouselImages,
      testimonials,
      LOR,
      project,
      courseName,
      courseIcon,
      dates,
    });
    const chapter = await Chapter.findById(chapterId);
    // console.log(chapter)
    chapter.workshops.push(workshop._id);
    await chapter.save();
    res
      .status(200)
      .json({ message: "Workshop Created!", done: true, workshop });
  } catch (error) {
    console.log(error);
    next();
  }
});

//get all workshops
router.get("/workshops", async (req, res) => {
  try {
    const workshops = await Workshop.find({});
    res.status(200).json({ message: "all workshops!", done: true, workshops });
  } catch (error) {
    console.log(error);
  }
});

//get a particular workshop
router.get("/workshop/:workshopId", async (req, res) => {
  try {
    const workshop = await Workshop.findById(req.params.workshopId);
    res
      .status(200)
      .json({ message: "Workshop Fetched!", done: true, workshop });
  } catch (error) {
    console.log(error);
  }
});

//create a user
router.post("/create-user", async (req, res) => {
  const { name, image, department, designation, chapterId } = req.body;
  try {
    const user = await User.create({
      name,
      image,
      department,
      designation,
    });
    if (chapterId) {
      const chapter = await Chapter.findById(chapterId);
      chapter.team.push(user._id);
      await chapter.save();
    }
    res.status(200).json({ message: "User created!", done: true, user });
  } catch (error) {
    console.log(error);
  }
});

//get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ message: "Users fetched", done: true, users });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
