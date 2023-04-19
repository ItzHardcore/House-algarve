import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
} from "mdb-react-ui-kit";

function ImageCard(props) {
  return (
    <MDBCard className="text-black mx-5">
      <MDBCardImage
        src={props.src}
        alt={props.name}
        className="img-fluid"
        aspectRatio="16:9"
      />
      <MDBCardBody className="text-start">
        <MDBCardTitle className="fw-bold">{props.name}</MDBCardTitle>
        <MDBCardText>{props.description}</MDBCardText>
        <MDBCardText>{props.value} € por noite</MDBCardText>
        <a className="sabermais" href="#">
          Saber mais
        </a>
      </MDBCardBody>
      <MDBCardFooter>
        <button className="contactar">
          <i className="fas fa-phone pe-2"></i>
          Contactar
        </button>
      </MDBCardFooter>
    </MDBCard>
  );
}

export default ImageCard;
