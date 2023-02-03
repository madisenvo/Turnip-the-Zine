import React from "react";
// import styled from "styled-components";
import "./style.css";
import { CDBBtn, CDBBox } from "cdbreact";
import { FaInstagramSquare, FaYoutube, FaFacebookF } from "react-icons/fa";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { artists } from "./data.js";

export default function GroupExample() {
  return (
    <>
      <CardGroup className="cardGroup">
        {artists.map((artist) => (
          <Card border="dark" style={{ width: "18rem" }}>
            <Card.Img
              className="cardImg"
              variant="top"
              src={artist.imagePath}
            />
            <Card.Body className="cardBody">
              <Card.Title>{artist.title}</Card.Title>
              <Card.Text>{artist.titleTwo}</Card.Text>
              <Card.Title>{artist.text}</Card.Title>
            </Card.Body>

            
            <Card.Footer>
              <h5 className="text-muted">{artist.footer}</h5>
              <CDBBox display="flex justify-content-center">
                <CDBBtn
                  href={artist.facebook}
                  target="_blank"
                  flat
                  color="dark" outline
                  className="p-3"
                >
                  <h1>
                    <FaFacebookF />
                  </h1>
                </CDBBtn>

                <CDBBtn
                  href={artist.insta}
                  target="_blank"
                  flat
                  color="dark" outline
                  className="mx-3 p-3"
                >
                  <h1>
                    <FaInstagramSquare />
                  </h1>
                </CDBBtn>

                <CDBBtn
                  href={artist.youtube}
                  target="_blank"
                  flat
                  color="dark" outline
                  className="p-3"
                >
                  <h1>
                    <FaYoutube />
                  </h1>
                </CDBBtn>

              </CDBBox>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </>
  );
}
