import React from "react";
import styled from "styled-components";
import titleVideo from "./title.mp4"

const VideoDiv = styled.div`
    position: fixed;
    z-index: -1;  
    width: 100%;
`

export default function Title() {
    return (
        <VideoDiv>
            <video autoPlay muted loop>
                <source src={titleVideo} type="video/mp4"/>
            </video>
        </VideoDiv>


    );
}
