import React, { useState } from "react";

export default function MiPerfil() {
  const [userData] = useState({
    nombre: "Carlos Mendoza",
    email: "carlos.mendoza@gmail.com",
    edad: 28,
    peso: 82,
    altura: 178,
    pesoObjetivo: 78,
    imc: 25.9,
    grasaCorporal: 15.2,
    entrenamientos: 156,
    nivel: "Avanzado",
    diasActivo: 234,
    calorias: 2400,
  });

  const calcularIMCStatus = (imc) => {
    if (imc < 18.5) return { text: "Bajo peso", color: "#fbbf24" };
    if (imc < 25) return { text: "Normal", color: "#10b981" };
    if (imc < 30) return { text: "Sobrepeso", color: "#f59e0b" };
    return { text: "Obesidad", color: "#ef4444" };
  };

  const imcStatus = calcularIMCStatus(userData.imc);

  const styles = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .stat-card {
      animation: fadeIn 0.6s ease-out;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .stat-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .progress-bar {
      transition: width 1s ease-out;
    }

    @media (max-width: 768px) {
      .stats-grid {
        grid-template-columns: 1fr !important;
      }
      .hero-content {
        padding: 40px 20px !important;
      }
    }
  `;

  const pageStyle = {
    backgroundColor: "#000000",
    minHeight: "100vh",
    color: "#FFFFFF",
  };

  const heroStyle = {
    position: "relative",
    height: "400px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=400&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
    marginBottom: "60px",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)",
  };

  const heroContentStyle = {
    position: "relative",
    zIndex: 10,
    padding: "60px 80px",
    width: "100%",
  };

  const avatarStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    border: "4px solid #ffffff",
    objectFit: "cover",
    marginBottom: "20px",
  };

  const nameStyle = {
    fontSize: "48px",
    fontWeight: "900",
    marginBottom: "10px",
    textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
  };

  const emailStyle = {
    fontSize: "18px",
    color: "#cccccc",
    marginBottom: "20px",
  };

  const levelBadgeStyle = {
    display: "inline-block",
    backgroundColor: "#10b981",
    color: "#000000",
    padding: "8px 20px",
    borderRadius: "20px",
    fontWeight: "bold",
    fontSize: "14px",
  };

  const containerStyle = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 40px 60px 40px",
  };

  const sectionTitleStyle = {
    fontSize: "32px",
    fontWeight: "800",
    marginBottom: "30px",
    color: "#ffffff",
  };

  const statsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "24px",
    marginBottom: "60px",
  };

  const statCardStyle = {
    backgroundColor: "#1a1a1a",
    padding: "30px",
    borderRadius: "16px",
    border: "1px solid #333333",
  };

  const statLabelStyle = {
    fontSize: "14px",
    color: "#999999",
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const statValueStyle = {
    fontSize: "36px",
    fontWeight: "900",
    color: "#ffffff",
  };

  const statUnitStyle = {
    fontSize: "18px",
    color: "#666666",
    marginLeft: "5px",
  };

  const detailsGridStyle = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "30px",
  };

  const cardStyle = {
    backgroundColor: "#1a1a1a",
    padding: "40px",
    borderRadius: "16px",
    border: "1px solid #333333",
  };

  const infoRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 0",
    borderBottom: "1px solid #333333",
  };

  const labelStyle = {
    color: "#999999",
    fontSize: "16px",
  };

  const valueStyle = {
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
  };

  const progressContainerStyle = {
    marginTop: "15px",
  };

  const progressBarBgStyle = {
    width: "100%",
    height: "8px",
    backgroundColor: "#333333",
    borderRadius: "10px",
    overflow: "hidden",
  };

  const progressBarStyle = (percentage) => ({
    width: `${percentage}%`,
    height: "100%",
    backgroundColor: "#10b981",
    borderRadius: "10px",
  });

  const progressTextStyle = {
    marginTop: "10px",
    fontSize: "14px",
    color: "#999999",
  };

  const imcCardStyle = {
    backgroundColor: "#1a1a1a",
    padding: "30px",
    borderRadius: "16px",
    border: "1px solid #333333",
    textAlign: "center",
  };

  const imcValueStyle = {
    fontSize: "64px",
    fontWeight: "900",
    color: "#ffffff",
    marginBottom: "10px",
  };

  const imcStatusStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: imcStatus.color,
    marginBottom: "20px",
  };

  ((userData.peso - userData.pesoObjetivo) / userData.peso) * 100;
  const pesoRestante = userData.peso - userData.pesoObjetivo;

  return (
    <>
      <style>{styles}</style>
      <div style={pageStyle}>
        {/* Hero Section */}
        <div style={heroStyle}>
          <div style={overlayStyle}></div>
          <div style={heroContentStyle} className="hero-content">
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=200&h=200&fit=crop"
              alt="Avatar"
              style={avatarStyle}
            />
            <h1 style={nameStyle}>{userData.nombre}</h1>
            <p style={emailStyle}>{userData.email}</p>
            <span style={levelBadgeStyle}>
              NIVEL {userData.nivel.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div style={containerStyle}>
          {/* Stats Grid */}
          <h2 style={sectionTitleStyle}>Estadísticas Generales</h2>
          <div style={statsGridStyle} className="stats-grid">
            <div style={statCardStyle} className="stat-card">
              <div style={statLabelStyle}>Entrenamientos</div>
              <div style={statValueStyle}>
                {userData.entrenamientos}
                <span style={statUnitStyle}>sesiones</span>
              </div>
            </div>

            <div style={statCardStyle} className="stat-card">
              <div style={statLabelStyle}>Días Activo</div>
              <div style={statValueStyle}>
                {userData.diasActivo}
                <span style={statUnitStyle}>días</span>
              </div>
            </div>

            <div style={statCardStyle} className="stat-card">
              <div style={statLabelStyle}>Peso Actual</div>
              <div style={statValueStyle}>
                {userData.peso}
                <span style={statUnitStyle}>kg</span>
              </div>
            </div>

            <div style={statCardStyle} className="stat-card">
              <div style={statLabelStyle}>Calorías Diarias</div>
              <div style={statValueStyle}>
                {userData.calorias}
                <span style={statUnitStyle}>kcal</span>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <h2 style={sectionTitleStyle}>Detalles del Perfil</h2>
          <div style={detailsGridStyle}>
            <div style={cardStyle}>
              <div style={infoRowStyle}>
                <span style={labelStyle}>Edad</span>
                <span style={valueStyle}>{userData.edad} años</span>
              </div>
              <div style={infoRowStyle}>
                <span style={labelStyle}>Altura</span>
                <span style={valueStyle}>{userData.altura} cm</span>
              </div>
              <div style={infoRowStyle}>
                <span style={labelStyle}>Peso Actual</span>
                <span style={valueStyle}>{userData.peso} kg</span>
              </div>
              <div style={infoRowStyle}>
                <span style={labelStyle}>Peso Objetivo</span>
                <span style={valueStyle}>{userData.pesoObjetivo} kg</span>
              </div>
              <div style={infoRowStyle}>
                <span style={labelStyle}>Grasa Corporal</span>
                <span style={valueStyle}>{userData.grasaCorporal}%</span>
              </div>

              <div style={progressContainerStyle}>
                <div style={{ ...labelStyle, marginBottom: "10px" }}>
                  Progreso hacia tu meta
                </div>
                <div style={progressBarBgStyle}>
                  <div
                    style={progressBarStyle(85)}
                    className="progress-bar"
                  ></div>
                </div>
                <div style={progressTextStyle}>
                  Te faltan {pesoRestante.toFixed(1)} kg para alcanzar tu
                  objetivo
                </div>
              </div>
            </div>

            <div>
              <div style={imcCardStyle}>
                <div style={statLabelStyle}>Índice de Masa Corporal</div>
                <div style={imcValueStyle}>{userData.imc}</div>
                <div style={imcStatusStyle}>{imcStatus.text}</div>
                <div style={{ ...progressTextStyle, textAlign: "left" }}>
                  El IMC se calcula dividiendo tu peso entre tu altura al
                  cuadrado. Un IMC entre 18.5 y 24.9 se considera normal.
                </div>
              </div>

              <div style={{ ...cardStyle, marginTop: "24px" }}>
                <div style={statLabelStyle}>Nivel de Actividad</div>
                <div
                  style={{
                    ...statValueStyle,
                    fontSize: "24px",
                    marginTop: "10px",
                  }}
                >
                  {userData.nivel}
                </div>
                <div style={{ ...progressTextStyle, marginTop: "15px" }}>
                  Basado en tu frecuencia de entrenamiento y consistencia
                  durante los últimos 90 días.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
