import React from "react";
import styled from "styled-components";
import titleVideo from "./title.mp4";

const ContentDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;

  padding: 50px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  position: relative;
`;

export default function Title() {
  return (
    <Container>
      <video className="video" autoPlay muted loop>
        <source src={titleVideo} type="video/mp4" />
      </video>

      <ContentDiv className="content">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.
        </p>
      </ContentDiv>
    </Container>
  );
}
