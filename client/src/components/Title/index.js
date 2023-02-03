import React from "react";
import styled from "styled-components";
import titleVideo from "./title.mp4";

const ContentDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  max-height: 30%;
  width: 50%;
  padding: 2%;
`;

const Container = styled.div`
  position: relative;
  text-align: center;
  background: linear-gradient(to right, rgba(251, 194, 235, 1), rgba(166, 193, 238, 1)) !important;
`;

export default function Title() {
  return (
    <Container>
      <video className="video" autoPlay muted loop>
        <source src={titleVideo} type="video/mp4" />
      </video>

      <ContentDiv>
        <h1 style={{ fontSize: "2vw" }} >Checkout this month's featured artists and come out to support local music.</h1>
      </ContentDiv>
    </Container>
  );
}
