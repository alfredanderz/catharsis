import React, { useState } from "react";

export default function Planes() {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const planes = [
    {
      id: 1,
      nombre: "Father Figure",
      precio: 0,
      periodo: "Gratis para siempre",
      descripcion: "Perfecto para comenzar tu viaje fitness",
      caracteristicas: [
        "Acceso a rutinas básicas",
        "Seguimiento de progreso",
        "3 planes de entrenamiento",
        "Comunidad fitness",
        "Estadísticas básicas",
      ],
      color: "#64748b",
      destacado: false,
    },
    {
      id: 2,
      nombre: "OPALITE GLOW PLAN",
      precio: 299.99,
      periodo: "por mes",
      descripcion: "Para atletas que buscan resultados serios",
      caracteristicas: [
        "Todo lo de Father Figure",
        "Rutinas personalizadas ilimitadas",
        "Planes de nutrición avanzados",
        "Asesoría mensual en vivo",
        "Análisis de composición corporal",
        "Acceso prioritario a nuevas funciones",
        "Biblioteca de ejercicios completa",
      ],
      color: "#10b981",
      destacado: true,
      badge: "MÁS POPULAR",
    },
    {
      id: 3,
      nombre: "GOLDEN STRENGTH PLAN",
      precio: 499.99,
      periodo: "por mes",
      descripcion: "El nivel máximo para verdaderos campeones",
      caracteristicas: [
        "Todo lo de OPALITE GLOW PLAN",
        "Coach personal dedicado 24/7",
        "Planes de suplementación personalizados",
        "Videollamadas semanales con expertos",
        "Acceso VIP a eventos exclusivos",
        "Descuentos en tiendas asociadas",
        "Programa de recuperación y movilidad",
        "Tracking avanzado con wearables",
      ],
      color: "#f59e0b",
      destacado: false,
    },
  ];

  const styles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }

    .plan-card {
      animation: fadeInUp 0.6s ease-out;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .plan-card:hover {
      transform: translateY(-10px) scale(1.02);
    }

    .plan-destacado {
      animation: pulse 2s ease-in-out infinite;
    }

    .check-icon {
      transition: transform 0.2s ease;
    }

    .plan-card:hover .check-icon {
      transform: scale(1.2);
    }

    @media (max-width: 1024px) {
      .plans-grid {
        grid-template-columns: 1fr !important;
        max-width: 500px;
        margin: 0 auto;
      }
    }
  `;

  const pageStyle = {
    background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
    minHeight: "100vh",
    padding: "80px 20px",
    color: "#FFFFFF",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "60px",
  };

  const titleStyle = {
    fontSize: "56px",
    fontWeight: "900",
    background: "linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "2px",
  };

  const subtitleStyle = {
    fontSize: "20px",
    color: "#a0a0a0",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  };

  const plansContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "40px",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const getPlanCardStyle = (plan, isHovered) => ({
    backgroundColor: plan.destacado ? "#1a1a1a" : "#0f0f0f",
    border: plan.destacado ? `3px solid ${plan.color}` : "3px solid #2a2a2a",
    borderRadius: "24px",
    padding: "50px 40px",
    position: "relative",
    overflow: "hidden",
    boxShadow: isHovered
      ? `0 20px 60px ${plan.color}40`
      : "0 10px 30px rgba(0,0,0,0.3)",
    transform: plan.destacado ? "scale(1.05)" : "scale(1)",
  });

  const badgeStyle = (color) => ({
    position: "absolute",
    top: "20px",
    right: "-35px",
    backgroundColor: color,
    color: "#000000",
    padding: "8px 50px",
    fontSize: "12px",
    fontWeight: "900",
    letterSpacing: "1px",
    transform: "rotate(45deg)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  });

  const planHeaderStyle = {
    marginBottom: "30px",
    paddingBottom: "30px",
    borderBottom: "2px solid #2a2a2a",
  };

  const planNameStyle = (color) => ({
    fontSize: "32px",
    fontWeight: "900",
    color: color,
    marginBottom: "10px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  });

  const priceContainerStyle = {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    marginBottom: "10px",
  };

  const priceStyle = (color) => ({
    fontSize: "64px",
    fontWeight: "900",
    color: color,
    lineHeight: "1",
  });

  const currencyStyle = {
    fontSize: "32px",
    marginRight: "5px",
  };

  const periodoStyle = {
    fontSize: "16px",
    color: "#666666",
    textAlign: "center",
    marginBottom: "15px",
  };

  const descripcionStyle = {
    fontSize: "15px",
    color: "#a0a0a0",
    textAlign: "center",
    lineHeight: "1.5",
  };

  const caracteristicasStyle = {
    listStyle: "none",
    padding: 0,
    margin: "30px 0",
  };

  const caracteristicaStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
    fontSize: "15px",
    color: "#cccccc",
  };

  const checkIconStyle = (color) => ({
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "12px",
    fontWeight: "bold",
    fontSize: "14px",
    color: "#000000",
    flexShrink: 0,
  });

  const buttonStyle = (color, isHovered) => ({
    width: "100%",
    backgroundColor: isHovered ? "#ffffff" : color,
    color: isHovered ? "#000000" : "#000000",
    padding: "18px 40px",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "900",
    cursor: "pointer",
    textTransform: "uppercase",
    letterSpacing: "1px",
    transition: "all 0.3s ease",
    boxShadow: `0 8px 20px ${color}40`,
  });

  return (
    <>
      <style>{styles}</style>
      <div style={pageStyle}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>Elige tu Plan</h1>
          <p style={subtitleStyle}>
            Selecciona el plan perfecto para alcanzar tus objetivos fitness y
            llevar tu rendimiento al siguiente nivel
          </p>
        </div>

        <div style={plansContainerStyle} className="plans-grid">
          {planes.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card ${plan.destacado ? "plan-destacado" : ""}`}
              style={getPlanCardStyle(plan, hoveredPlan === plan.id)}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.badge && (
                <div style={badgeStyle(plan.color)}>{plan.badge}</div>
              )}

              <div style={planHeaderStyle}>
                <h3 style={planNameStyle(plan.color)}>{plan.nombre}</h3>
                <div style={priceContainerStyle}>
                  {plan.precio > 0 && (
                    <span
                      style={{ ...priceStyle(plan.color), ...currencyStyle }}
                    >
                      $
                    </span>
                  )}
                  <span style={priceStyle(plan.color)}>
                    {plan.precio === 0 ? "GRATIS" : plan.precio}
                  </span>
                </div>
                <p style={periodoStyle}>{plan.periodo}</p>
                <p style={descripcionStyle}>{plan.descripcion}</p>
              </div>

              <ul style={caracteristicasStyle}>
                {plan.caracteristicas.map((caracteristica, i) => (
                  <li key={i} style={caracteristicaStyle}>
                    <span
                      style={checkIconStyle(plan.color)}
                      className="check-icon"
                    >
                      ✓
                    </span>
                    {caracteristica}
                  </li>
                ))}
              </ul>

              <button style={buttonStyle(plan.color, hoveredPlan === plan.id)}>
                {plan.precio === 0 ? "Comenzar Gratis" : "Suscribirme"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
