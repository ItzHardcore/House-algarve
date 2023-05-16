import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fundo from "../assets/images/algarve.jpg";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import ImageCard from "../components/ImageCard";
import TituloFundo from "../components/TituloFundo";

function Landing() {
  return (
    <div className="w-auto">
      <Navbar />
      <TituloFundo texto="bem-vindo ao algarve" imagem={fundo} />
      <MDBContainer
        style={{
          position: "relative",
          top: "-100px",
          backgroundColor: "white",
        }}
      >
        <p className="pt-4 text-center text-black-50 mb-5">
          Sinta-se em casa, longe de casa
        </p>

        <MDBRow className="text-center pb-5">
          <MDBCol size="md pb-5">
            <ImageCard
              src="https://villa-algarve.info/wp-content/uploads/2021/02/1.jpg"
              name="Praia da Luz, Algarve"
              description="Casa com piscina, T3"
              to="/praialuz"
            />
          </MDBCol>
          <MDBCol size="md pb-5">
            <ImageCard
              src="https://villa-algarve.info/wp-content/uploads/2021/02/1.jpg"
              name="Praia Verde, Algarve"
              description="Casa com piscina, T5"
              to="/praiaverde"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
}
export default Landing;
