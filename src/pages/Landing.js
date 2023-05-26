import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fundo from "../assets/images/algarve.jpg";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import ImageCard from "../components/ImageCard";
import TituloFundo from "../components/TituloFundo";

//fotos
import cozy_photo from "../assets/images/cozy.jpeg";
import siroco_photo from "../assets/images/siroco.jpeg";

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
              src={cozy_photo}
              name="Cozy Pool House "
              description="Casa com piscina, T2"
              to="/cozyhouse"
            />
          </MDBCol>
          <MDBCol size="md pb-5">
            <ImageCard
              src={siroco_photo}
              name="Sirocco Pool House"
              description="Casa com piscina, T2"
              to="/siroccohouse"
            />
          </MDBCol>
          <MDBCol size="md pb-5">
            <ImageCard
              src={cozy_photo}
              name="Colors Pool House"
              description="Casa com piscina, T2"
              to="/colorspoolhouse"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
}
export default Landing;
