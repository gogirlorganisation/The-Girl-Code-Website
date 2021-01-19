import React from 'react'
import { Container, BoxImage, FooterImages, FooterImage, PinkDiv} from './imagecorousel.styles'

class ImageCorousel extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            imgUrls: this.props.imgUrls,
            imgIndex: 0,
            windowWidth: window.innerWidth,
            numberImages:  Math.min(Math.floor(window.innerWidth / 190),this.props.imgUrls.length)
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.nextImage, 5000)
        window.addEventListener('resize',  () => {
            this.setState({ windowWidth: window.innerWidth })
            this.numberImages()
        })
      }

    componentWillUnmount() {
        clearInterval(this.interval)
        window.removeEventListener('resize', () => console.log('removed'))
      }

    nextImage = () => {

        this.setState((prevState) =>{
            if (prevState.imgIndex === this.state.numberImages - 1){
                return {imgIndex: 0}
            }
            else{
                return {imgIndex: prevState.imgIndex + 1}
            }
        })
    }


    indexImage = (e,index) => {
        this.setState({imgIndex: Number(e.currentTarget.getAttribute('index'))})
        console.log(this.state)
    }

    numberImages = () => {
        let count = Math.floor(this.state.windowWidth / 190) 
        this.setState({numberImages: Math.min(count,this.state.imgUrls.length)})
    }


    
    render() {
        const imgUrl = this.state.imgUrls[this.state.imgIndex]
        const img = require(`../../assets/${imgUrl}`)
        const newImgUrls = this.state.imgUrls.filter((Url, index) => index < this.state.numberImages)
        
        console.log(newImgUrls)

        return(
            <Container>
                <BoxImage style = {{backgroundImage: `url(${img.default})` }}>
                    <PinkDiv> 
                        <h6 style = {{margin:0}}> <bold> SJI Workshop </bold> </h6>
                        <p style = {{margin:0}}> Learn more about our Singapore chapter &#8594; </p>
                    </PinkDiv>
                </BoxImage>

                <FooterImages>
                    {   
                        
                        newImgUrls.map((imgUrl,index) => {
                            const footerImg = require(`../../assets/${imgUrl}`)
                            console.log(index === this.state.imgIndex)
                            return (
                                <div key = {index} 
                                    onClick = {this.indexImage}
                                    index = {index} >
                                <FooterImage src = {footerImg.default}
                                 style = { index === this.state.imgIndex ? {border: "3px solid #EE1E6D"}: {}}/>
                                </div>

                            )
                            
                        })
                    }
                </FooterImages>

            </Container>

        )
    

}}
    

export default ImageCorousel