import React from "react";
import styled from "styled-components";
import titleVideo from "./title.mp4"

const VideoDiv = styled.div`
    width: 100%vh;
    height: 100%vw;

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
