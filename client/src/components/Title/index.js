import React from "react";
import styled from "styled-components";
import titleVideo from "./title.mp4";

const ContentDiv = styled.div`
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
`;

const Container = styled.div`
    position: relative;
`

export default function Title() {
  return (
    <Container>
        <video className="video" autoPlay muted loop>
          <source src={titleVideo} type="video/mp4" />
        </video>

        <ContentDiv className="content">
            <h1>About Us</h1>
            <p>Lorem ipsum...</p>
        </ContentDiv>
    </Container>



  );
}
