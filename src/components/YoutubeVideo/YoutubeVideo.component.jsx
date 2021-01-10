import React, {Component} from 'react'
import ReactPlayer from 'react-player'

import { PlayerWrap, ReactStyled, boom} from "./YoutubeVideo.styles";


const YoutubeVideo = ({videoOne, videoTwo, textOne, textTwo}) => {
    return (<div>
            <PlayerWrap>
                <ReactStyled
                className='react-player'
                url={videoOne}
                controls={true}
                width="100%"
                height="100%"
                />
            </PlayerWrap>

            <PlayerWrap>
                <ReactStyled
                className='react-player'
                url={videoTwo}
                controls={true}
                width="100%"
                height="100%"
                />
            </PlayerWrap>
            </div>
    )

}

export default YoutubeVideo;