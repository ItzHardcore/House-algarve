import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fundo from "../assets/images/algarve.jpg";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import TituloFundo from "../components/TituloFundo";
import photo from "../assets/images/praia-algarve-1-1-scaled.jpg";

function Algarve() {
  return (
    <div>
      <Navbar />
      <TituloFundo texto="Descubra o algarve" imagem={fundo} />
      <MDBContainer
        style={{
          position: "relative",
          top: "-100px",
          backgroundColor: "white",
        }}
      >
        <p className="py-4 text-center text-black-50">Um lugar mágico</p>

        <div className="text-black mx-lg-5 px-lg-5">
          <p>
            O Algarve é um destino de férias popular, conhecido pelas suas
            praias de areia dourada, águas cristalinas, clima quente e
            ensolarado e uma vasta gama de atividades recreativas. A região é o
            lar de muitas cidades encantadoras, como Lagos, Albufeira e
            Vilamoura, que oferecem uma mistura de cultura, gastronomia e vida
            noturna.
          </p>
          <p>
            Os amantes de praia vão adorar as inúmeras praias do Algarve, que
            vão desde pequenas enseadas escondidas até vastas praias de areia.
            Há também muitas atividades aquáticas para desfrutar, como surf,
            windsurf, caiaque e paddle boarding
          </p>
          <p>
            O Algarve é o lugar perfeito para criar memórias inesquecíveis e
            experiências incríveis. Venha desfrutar das maravilhas que esta
            região tem para oferecer e prepare-se para uma viagem de férias que
            nunca esquecerá!
          </p>
          <img className="w-100" src={photo} alt=""></img>

          <MDBRow className="text-center pt-5 pb-2">
            <h6 className="text-black fw-bold pb-3">
              EXPLORE O DESTINO COM MAIS SOL DA EUROPA
            </h6>
            <MDBCol className="col-12 col-md-6 col-lg-3">
              <img
                className="w-100 my-3"
                src="https://www.vortexmag.net/wp-content/uploads/2022/07/36107276664_3d69e72a63_h-min.jpg"
                alt=""
              ></img>
              <a
                className="algarvelinks"
                href="https://www.visitalgarve.pt/pt/travelplanner.aspx"
                target="_blank"
                rel="noreferrer"
              >
                Algarve Travel Planner
              </a>
              <p className="text-black py-1 px-2" style={{ fontSize: "13px" }}>
                Descubra aqui como planear a sua viagem ao Algarve para tirar o
                máximo proveito.
              </p>
            </MDBCol>
            <MDBCol className="col-12 col-md-6 col-lg-3">
              <img
                className="w-100 my-3"
                src="https://www.vortexmag.net/wp-content/uploads/2022/07/36107276664_3d69e72a63_h-min.jpg"
                alt=""
              ></img>
              <a
                className="algarvelinks"
                href="https://eventos.visitalgarve.pt/pt/"
                target="_blank"
                rel="noreferrer"
              >
                Algarve Eventos
              </a>
              <p className="text-black py-1 px-2" style={{ fontSize: "13px" }}>
                Mantenha-se atualizado sobre todos os eventos atuais e futuros
                que ocorrem na região do Algarve.
              </p>
            </MDBCol>
            <MDBCol className="col-12 col-md-6 col-lg-3">
              <img
                className="w-100 my-3"
                src="https://www.vortexmag.net/wp-content/uploads/2022/07/36107276664_3d69e72a63_h-min.jpg"
                alt=""
              ></img>
              <a
                className="algarvelinks"
                href="https://www.visitalgarve.pt/externalPages/mapa/default.aspx"
                target="_blank"
                rel="noreferrer"
              >
                Mapa Interativo
              </a>
              <p className="text-black py-1 px-2" style={{ fontSize: "13px" }}>
                O mapa interativo do Algarve fornece todas as informações
                necessárias sobre localizações e pontos de interesse na região.
              </p>
            </MDBCol>
            <MDBCol className="col-12 col-md-6 col-lg-3">
              <img
                className="w-100 my-3"
                src="https://www.vortexmag.net/wp-content/uploads/2022/07/36107276664_3d69e72a63_h-min.jpg"
                alt=""
              ></img>
              <a
                className="algarvelinks"
                href="https://www.visitalgarve.pt/pt/online-store.aspx"
                target="_blank"
                rel="noreferrer"
              >
                Catálogo online
              </a>
              <p className="text-black py-1 px-2" style={{ fontSize: "13px" }}>
                Encontre aqui guias, mapas e outras edições do Algarve.
              </p>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
      <Footer />
    </div>
  );
}
export default Algarve;
