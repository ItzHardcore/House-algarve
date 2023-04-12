import { MDBContainer } from "mdb-react-ui-kit";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Titulo_fundo from "../components/Titulo_fundo";

function House_detail() {
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
        <p className="pt-4 text-center text-black-50">Reserve já</p>
      </MDBContainer>
      <Footer />
    </div>
  );
}
export default House_detail;
