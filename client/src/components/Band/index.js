import React from "react";
// import styled from "styled-components";
import "./style.css";




import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { artists } from "./data.js";

export default function GroupExample() {
  return (
    <>
    <CardGroup className="cardGroup">
{artists.map((artist) => ( 
      <Card
      border="dark" 
      style={{ width: '18rem' }}
      >
        <Card.Img className="cardImg" variant="top" src= { artist.imagePath } />
        <Card.Body className="cardBody">
          <Card.Title>{artist.title}</Card.Title>
          <Card.Title>{artist.titleTwo}</Card.Title>
          <Card.Text>
            {artist.text}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{artist.footer}</small>
        </Card.Footer>
      </Card>
      ))}
    </CardGroup>
      </>
  );
}
