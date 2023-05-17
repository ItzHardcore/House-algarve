import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";
import Algarve from "./pages/Algarve";
import CozyHouse from "./pages/CozyHouse";
import { MDBContainer } from "mdb-react-ui-kit";
import SiroccoHouse from "./pages/SiroccoHouse";

function App() {
  return (
    <div style={{ backgroundColor: "rgb(239,232,218)" }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="algarve" element={<Algarve />} />
          <Route path="cozyhouse" element={<CozyHouse />} />
          <Route path="siroccohouse" element={<SiroccoHouse />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
