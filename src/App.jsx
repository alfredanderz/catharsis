import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Amigos from "./pages/Amigos";
import Entrenamiento from "./pages/Entrenamiento";
import Logros from "./pages/Logros";
import MiPerfil from "./pages/MiPerfil";
import Nosotros from "./pages/Nosotros";
import Planes from "./pages/Planes";

export default function App() {
  const [currentPage, setCurrentPage] = useState("amigos");

  const appStyle = {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    margin: 0,
    padding: 0,
  };

  const renderPage = () => {
    switch (currentPage) {
      case "amigos":
        return <Amigos />;
      case "entrenamiento":
        return <Entrenamiento />;
      case "logros":
        return <Logros />;
      case "perfil":
        return <MiPerfil />;
      case "nosotros":
        return <Nosotros />;
      case "planes":
        return <Planes />;
      default:
        return <Amigos />;
    }
  };

  return (
    <div style={appStyle}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}
