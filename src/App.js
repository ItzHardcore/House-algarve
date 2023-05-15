import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";
import Algarve from "./pages/Algarve";
import PraiaLuz from "./pages/Praialuz";

function App() {
  return (
    <div style={{ backgroundColor: "rgb(239,232,218)" }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="algarve" element={<Algarve />} />
          <Route path="praialuz" element={<PraiaLuz />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
