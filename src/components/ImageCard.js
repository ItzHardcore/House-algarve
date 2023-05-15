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
import { Link } from "react-router-dom";

function ImageCard(props) {
  return (
    <MDBCard className="text-black mx-5">
      <MDBCardImage
        src={props.src}
        alt={props.name}
        className="img-fluid"
        aspectRatio="16:9"
      />
      <MDBCardBody className="text-start pt-4 px-0">
        <MDBCardTitle className="fw-bold">{props.name}</MDBCardTitle>
        <MDBCardText>{props.description}</MDBCardText>
        <MDBCardText>{props.value} € por noite</MDBCardText>
        <Link className="sabermais" to={props.to}>
          Saber mais
        </Link>
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
