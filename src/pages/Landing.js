import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fundo from "../assets/images/algarve.jpg";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import ImageCard from "../components/ImageCard";
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
        <p className="pt-4 text-center text-black-50 mb-5">
          Sinta-se em casa, longe de casa
        </p>

        <MDBRow className="text-center pb-5">
          <MDBCol size="md pb-5">
            <ImageCard
              src="https://villa-algarve.info/wp-content/uploads/2021/02/1.jpg"
              name="Praia da Luz, Algarve"
              value="200"
              description="Casa com piscina, T3"
              to="/praialuz"
            />
          </MDBCol>
          <MDBCol size="md pb-5">
            <ImageCard
              src="https://villa-algarve.info/wp-content/uploads/2021/02/1.jpg"
              name="Praia Verde, Algarve"
              value="350"
              description="Casa com piscina, T5"
              to="/praialuz"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
}
export default Landing;
