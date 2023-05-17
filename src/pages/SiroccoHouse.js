import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fundo from "../assets/images/algarve.jpg";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import SyncCalendar from "../components/SyncCalendar";
import HousePhotos from "../components/HousePhotos";
import TituloFundo from "../components/TituloFundo";
import axios from "axios";

//icons
import { TbToolsKitchen2, TbAirConditioning } from "react-icons/tb";
import { GiBarbecue, GiHomeGarage } from "react-icons/gi";
import { BsWifi, BsTv } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiRestaurant } from "react-icons/bi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";

function SiroccoHouse() {
  const [price, setPrice] = useState(500);

  async function getDocumentContent(fileId) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/drive/v3/files/${fileId}/export`,
        {
          params: {
            mimeType: "text/plain", // Specify the desired MIME type of the document
            key: "AIzaSyDkdLWsQ1N9cGxGNx0reL17BUjNq1Pts78", // Replace with your Google Drive API key
          },
        }
      );

      const documentContent = response.data;

      // Set price
      setPrice(documentContent);

      // Use the extracted price value
      console.log("Price:", response.data, documentContent, price);
    } catch (error) {
      console.error("Error retrieving document content:", error);
    }
  }

  // Call the getDocumentContent function with the file ID of your document
  getDocumentContent("1yjj0M-AC0pfZIW1sL-qe3lXPPAsfc1OaU5hgGD8moK0");

  return (
    <div>
      <Navbar />
      <TituloFundo texto="Conheça a nossa casa" imagem={fundo} />
      <MDBContainer
        style={{
          position: "relative",
          top: "-100px",
          backgroundColor: "white",
        }}
      >
        <p className="pt-4 text-center text-black-50">
          Comodidade e conforto para toda a família
        </p>
        <div className="mx-lg-5 px-lg-5 ">
          <div className="text-black pb-3">
            <h5 className="border border-2 border-white">Sirocco Pool House</h5>

            <HousePhotos folderId="a"></HousePhotos>

            <MDBRow className="border border-2 border-white">
              <MDBCol size="md-12 col-lg-6">
                <h5>Casa com piscina, T5</h5>
                <h6>10 hóspedes | 2 suítes | 3 quartos | 3 casas de banho</h6>
              </MDBCol>
              <MDBCol size="md-12 col-lg-6">
                <p
                  style={{ float: "right" }}
                  className="contactar2 mr-1 pe-none"
                >
                  € {price} / noite
                </p>
              </MDBCol>
            </MDBRow>
          </div>

          <MDBRow className="pb-5">
            <MDBCol size="md-12 col-lg-6">
              <MDBRow className="text-black">
                <MDBCol size="md" className="pt-3 py-md-3">
                  <TbToolsKitchen2 className="me-1" />
                  <GiBarbecue className="me-1" />
                  <p>
                    Cozinha totalmente equipada e área de churrasco ao ar livre.
                  </p>
                  <BsWifi className="me-1" />
                  <BsTv className="me-1" />
                  <p>Wi-Fi gratuito e TV a cabo.</p>
                  <TbAirConditioning className="me-1" />
                  <p>Ar-condicionado em toda a casa.</p>
                  <GiHomeGarage className="me-1" />
                  <p>Estacionamento gratuito.</p>
                </MDBCol>
                <MDBCol size="md" className="pb-3 py-md-3">
                  <AiOutlineShoppingCart className="me-1" />
                  <BiRestaurant className="me-1" />
                  <FaUmbrellaBeach className="me-1" />
                  <p>
                    Localizado numa área tranquila e segura, perto de
                    supermercados, restaurantes e praias.
                  </p>
                  <MdFamilyRestroom className="me-1" />
                  <p>
                    Ideal para famílias e grupos de amigos em busca de uma
                    escapadela relaxante
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol size="md-12" className="text-center col-lg-6 py-md-3">
              <div className="d-flex justify-content-center mb-3">
                <SyncCalendar />
              </div>
              <a href="tel:+351939708151" className="contactar2">
                <i className="fas fa-phone pe-2"></i>
                Contactar
              </a>
            </MDBCol>
          </MDBRow>
          <div className="text-start pb-5">
            <p>Rua de Real Village, Praia Verder, Algarve</p>
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50861.04805936538!2d-7.516499269375853!3d37.18085529706109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1018e218ae96c9%3A0x4f98434ba9fbf7b9!2sPraia%20Verde!5e0!3m2!1spt-PT!2spt!4v1684181941922!5m2!1spt-PT!2spt"
              allowfullscreen=""
              width="100%"
              height="450"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </MDBContainer>
      <Footer />
    </div>
  );
}
export default SiroccoHouse;
