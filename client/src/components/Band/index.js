import React from "react";
// import styled from "styled-components";




import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { artists } from "./data.js";

export default function GroupExample() {
  return (
    <>
    <CardGroup>
{artists.map((artist) => ( 
      <Card
      >
        <Card.Img variant="top" src= { artist.imagePath } />
        <Card.Body>
          <Card.Title>{artist.title}</Card.Title>
          <Card.Title>{artist.titleTwo}</Card.Title>
          <Card.Text>
            {artist.text}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      ))}
    </CardGroup>
      </>
  );
}
