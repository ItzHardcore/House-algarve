import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fundo from "../assets/images/algarve.jpg";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Houseshow from "../components/Houseshow";
import Titulo_fundo from "../components/Titulo_fundo";

//icons
import { IoMdCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import ContactForm from "../components/ContactForm";

function Contacts() {
  return (
    <div>
      <Navbar />
      <Titulo_fundo texto="Descubra o algarve" imagem={fundo} />
      <MDBContainer
        style={{
          position: "relative",
          top: "-100px",
          backgroundColor: "white",
        }}
      >
        <p className="py-4 text-center text-black-50">Reserve já</p>

        <div className="text-black mx-lg-5 px-lg-5">
          <p className="fw-bold">
            Quer saber mais sobre os apartamentos ou sobre o Algarve? Entre em
            contacto!
          </p>
          <p>
            <a href="tel:+35191532797" className="algarvelinks py-3">
              <IoMdCall className="fs-1 me-1" style={{ color: "#835b31" }} />
              +351 935 912 124
            </a>
          </p>

          <a href="mailto: abc@example.com" className="algarvelinks">
            <HiOutlineMail className="fs-1 me-1" style={{ color: "#835b31" }} />
            xxxxxxxxx@gmail.com
          </a>

          <h6 className="text-start text-black fw-bold pb-3 pt-5 mt-5">
            ENTRE EM CONTACTO
          </h6>
          <ContactForm></ContactForm>
        </div>
      </MDBContainer>
      <Footer />
    </div>
  );
}
export default Contacts;
