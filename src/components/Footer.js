import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      style={{ paddingBottom: "60px" }}
      bgColor="rgb(239 232 218)"
      className="text-lg-start text-black"
    >
      <MDBContainer>
        <MDBRow start>
          <MDBCol size="4" style={{ paddingRight: "90px" }}>
            <h6 className="fw-bold mb-4">Entre em contacto</h6>
            <p className="text-muted">
              Fale connosco! Quer mais informações acerca das casas ou sobre o
              Algarve? Envie um email para XXX@gmail.com
            </p>
          </MDBCol>
          <MDBCol size="4">
            <h6 className="text-uppercase fw-bold mb-4">Siga-nos!</h6>

            <a href="" className="me-4">
              <MDBIcon size="2x" color="black" fab icon="facebook-f" />
            </a>

            <a href="" className="me-4">
              <MDBIcon size="2x" color="black" fab icon="instagram" />
            </a>
          </MDBCol>
        </MDBRow>

        <p className="text-muted text-end">
          Copyright @ 2023 Todos os direitos reservados
        </p>
      </MDBContainer>
    </MDBFooter>
  );
}
