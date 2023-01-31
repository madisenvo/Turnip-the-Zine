// import React from "react";
// import styled from "styled-components";

// export default function Band() {
//     return (
//         <div className="band">
//             <h1>FEATURED BAND</h1>
//         </div>
//     );
// }

import React from "react";
import "./style.css";
import profPic from "../Band/bandImages/pinkranger.png";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { FaFacebookF, FaInstagram, FaItunesNote } from 'react-icons/fa';

export default function EditButton() {
  return (
    <div
      className="profCard gradient-custom-2"
      style={{ backgroundColor: "#9de2ff" }}
    >
      <MDBContainer className="profCard g-col-6 g-col-md-4 py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <MDBCardImage
                    src={profPic}
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "150px", zIndex: "1" }}
                  />
                  <MDBBtn
                    outline
                    color="dark"
                    style={{ height: "36px", overflow: "visible" }}
                  >
                    Pink Ranger
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <MDBTypography tag="h5">Angsty Rock</MDBTypography>
                  <MDBCardText>
                    Denver
                    </MDBCardText>
                   
                    {/* <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div> */}
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              ></div>

              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <MDBCardText className="font-italic mb-1">
                      Musical Genius
                    </MDBCardText>
                    <MDBCardText className="font-italic mb-1">
                      All the Ninja Moves
                    </MDBCardText>
                    <MDBCardText className="font-italic mb-1">
                      Lover of pink
                    </MDBCardText>
                    <MDBCardText className="font-italic mb-0">
                      Basically famous
                    </MDBCardText>
                  </div>
                </div>
              
                {/* <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </MDBCol>
                </MDBRow> */}
               
              </MDBCardBody>
          
            </MDBCard>
          </MDBCol>
    <div>
  <h3> <FaFacebookF /></h3>
  <h3> <FaInstagram /></h3>
  <h3> <FaItunesNote/></h3>
  </div>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
