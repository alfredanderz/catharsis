import React, { useState } from "react";

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const styles = `
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .nav-link {
      transition: all 0.3s ease;
      position: relative;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: #ffffff;
      transition: width 0.3s ease;
    }
    .nav-link:hover::after { width: 100%; }
    .nav-link.active::after { width: 100%; }
    .mobile-menu {
      animation: slideDown 0.3s ease-out;
    }
    @media (max-width: 768px) {
      .desktop-nav { display: none !important; }
      .mobile-menu-button { display: block !important; }
    }
    @media (min-width: 769px) {
      .mobile-menu-button { display: none !important; }
      .mobile-menu { display: none !important; }
    }
  `;

  const navStyle = {
    backgroundColor: "#ffffff",
    padding: "1px 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    borderBottom: "1px solid #f0f0f0",
  };

  const logoImageStyle = {
    height: "125px",
    width: "auto",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "40px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    alignItems: "center",
  };

  const linkStyle = (isActive) => ({
    color: isActive ? "#000000" : "#666666",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: isActive ? "700" : "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    padding: "8px 0",
    position: "relative",
  });

  const mobileMenuButtonStyle = {
    display: "none",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "10px",
  };

  const hamburgerStyle = {
    width: "25px",
    height: "2px",
    backgroundColor: "#000000",
    margin: "5px 0",
    transition: "0.3s",
    display: "block",
  };

  const mobileMenuStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "20px 0",
  };

  const mobileMenuItemStyle = (isActive) => ({
    padding: "15px 60px",
    color: isActive ? "#000000" : "#666666",
    fontWeight: isActive ? "700" : "600",
    fontSize: "15px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    cursor: "pointer",
    borderLeft: isActive ? "4px solid #000000" : "4px solid transparent",
    transition: "all 0.3s ease",
  });

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>{styles}</style>

      <nav style={navStyle}>
        {/* LADO IZQUIERDO VACÍO PARA CENTRAR */}
        <div style={{ width: "150px" }}></div>
        <h1> CATHARSIS</h1>
        {/* CENTRO → LOGO CENTRADO */}
        <div
          style={{
            display: "flex",
            marginLeft: "550px",
            justifyContent: "center",
            flex: 1,
            height: "",
          }}
        >
          <img
            src="https://branition.com/assets/img/users/logos/13695-8kejRHp.webp"
            alt="Logo"
            style={logoImageStyle}
          />
        </div>
        {/* DERECHA → MENÚ */}
        <ul style={navLinksStyle} className="desktop-nav">
          <li
            className={`nav-link ${currentPage === "nosotros" ? "active" : ""}`}
            style={linkStyle(currentPage === "nosotros")}
            onClick={() => handleNavClick("nosotros")}
          >
            Nosotros
          </li>
          <li
            className={`nav-link ${
              currentPage === "entrenamiento" ? "active" : ""
            }`}
            style={linkStyle(currentPage === "entrenamiento")}
            onClick={() => handleNavClick("entrenamiento")}
          >
            Entrenamiento
          </li>
          <li
            className={`nav-link ${currentPage === "logros" ? "active" : ""}`}
            style={linkStyle(currentPage === "logros")}
            onClick={() => handleNavClick("logros")}
          >
            Logros
          </li>
          <li
            className={`nav-link ${currentPage === "perfil" ? "active" : ""}`}
            style={linkStyle(currentPage === "perfil")}
            onClick={() => handleNavClick("perfil")}
          >
            Mi Perfil
          </li>
          <li
            className={`nav-link ${currentPage === "planes" ? "active" : ""}`}
            style={linkStyle(currentPage === "planes")}
            onClick={() => handleNavClick("planes")}
          >
            Planes
          </li>
          <li
            className={`nav-link ${currentPage === "amigos" ? "active" : ""}`}
            style={linkStyle(currentPage === "amigos")}
            onClick={() => handleNavClick("amigos")}
          >
            Amigos
          </li>
        </ul>
        {/* BOTÓN MOBILE */}
        <button
          style={mobileMenuButtonStyle}
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span style={hamburgerStyle}></span>
          <span style={hamburgerStyle}></span>
          <span style={hamburgerStyle}></span>
        </button>
        {isMenuOpen && (
          <div style={mobileMenuStyle} className="mobile-menu">
            <div
              style={mobileMenuItemStyle(currentPage === "nosotros")}
              onClick={() => handleNavClick("nosotros")}
            >
              Nosotros
            </div>
            <div
              style={mobileMenuItemStyle(currentPage === "entrenamiento")}
              onClick={() => handleNavClick("entrenamiento")}
            >
              Entrenamiento
            </div>
            <div
              style={mobileMenuItemStyle(currentPage === "logros")}
              onClick={() => handleNavClick("logros")}
            >
              Logros
            </div>
            <div
              style={mobileMenuItemStyle(currentPage === "perfil")}
              onClick={() => handleNavClick("perfil")}
            >
              Mi Perfil
            </div>
            <div
              style={mobileMenuItemStyle(currentPage === "planes")}
              onClick={() => handleNavClick("planes")}
            >
              Planes
            </div>
            <div
              style={mobileMenuItemStyle(currentPage === "amigos")}
              onClick={() => handleNavClick("amigos")}
            >
              Amigos
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
