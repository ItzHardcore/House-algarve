import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fundo from "../assets/images/algarve.jpg";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import SyncCalendar from "../components/SyncCalendar";
import HousePhotos from "../components/HousePhotos";
import Titulo_fundo from "../components/Titulo_fundo";

//icons
import { TbToolsKitchen2, TbAirConditioning } from "react-icons/tb";
import { GiBarbecue, GiHomeGarage } from "react-icons/gi";
import { BsWifi, BsTv } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiRestaurant } from "react-icons/bi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";

function PraiaLuz() {
  return (
    <div>
      <Navbar />
      <Titulo_fundo texto="Conheça a nossa casa" imagem={fundo} />
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
        <div className="mx-5 px-5 ">
          <HousePhotos
            folderId="1uTQkpg2sJoFT5NCy6b5oIZkwVqiwcKNn"
            name="Praia Verde, Algarve"
          ></HousePhotos>
          <MDBRow className="">
            <MDBCol size="md">
              <MDBRow className="text-black">
                <MDBCol size="md">
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
                <MDBCol size="md">
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
            <MDBCol size="md">
              <SyncCalendar />
            </MDBCol>
          </MDBRow>
        </div>
        <MDBRow className="text-center">
          <MDBCol size="md">
            <p>Rua de Real Village, Praia Verder, Algarve</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50861.04805936538!2d-7.516499269375853!3d37.18085529706109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1018e218ae96c9%3A0x4f98434ba9fbf7b9!2sPraia%20Verde!5e0!3m2!1spt-PT!2spt!4v1684181941922!5m2!1spt-PT!2spt"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </MDBCol>
          <MDBCol size="md">
            <button className="contactar">
              <i className="fas fa-phone pe-2"></i>
              Contactar
            </button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
}
export default PraiaLuz;
