import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fundo from "../assets/images/algarve.jpg";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Houseshow from "../components/Houseshow";
import Titulo_fundo from "../components/Titulo_fundo";

function Landing() {
  return (
    <div>
      <Navbar />
      <Titulo_fundo texto="bem-vindo ao algarve" imagem={fundo} />
      <MDBContainer
        style={{
          position: "relative",
          top: "-100px",
          backgroundColor: "white",
        }}
      >
        <p className="pt-4 text-center text-black-50">
          Sinta-se em casa, longe de casa
        </p>

        <MDBRow className="text-center">
          <MDBCol size="md">
            <Houseshow />
          </MDBCol>
          <MDBCol size="md">
            <Houseshow />
          </MDBCol>
        </MDBRow>
        <p>ate</p>
        <p>ate</p>
        <p>ate</p>
        <p>ate</p>
        <p>ate</p>
        <p>ate</p>

        <p>ate</p>

        <p>ate</p>
        <p>ate</p>
      </MDBContainer>
      <Footer />
    </div>
  );
}
export default Landing;
