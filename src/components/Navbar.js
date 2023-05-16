import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{ zIndex: "1000", width: "100%", textAlignLast: "center" }}
      className="fs-6 pt-4 position-absolute d-inline"
    >
      <Link className="text-light mx-md-5 mx-3" to="/">
        Início
      </Link>

      <Link className="text-light mx-md-5 mx-3" to="/algarve">
        Algarve
      </Link>

      <Link className="text-light mx-md-5 mx-3" to="/contacts">
        Contactos
      </Link>
    </div>
  );
}
