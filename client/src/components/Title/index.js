import React from "react";
import styled from "styled-components";
import titleVideo from "./title.mp4"

const VideoDiv = styled.div`
    top: 0;
    left: 0;
    width: auto;
    height: auto; 
    margin: 0;
    padding: 0;
`

export default function Title() {
    return (
        <div>
            <VideoDiv>
                <video autoPlay muted loop>
                    <source src={titleVideo} type="video/mp4"/>
                </video>
            </VideoDiv>
        </div>



    );
}
