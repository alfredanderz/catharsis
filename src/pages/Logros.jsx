import React, { useState } from "react";

export default function Logros() {
  const [logros, setLogros] = useState({
    press: [
      {
        titulo: "Primer Topeo",
        desc: "Descubriste que la barra SÍ pesa. Levantaste 20kg.",
        completado: false,
      },
      {
        titulo: "Modo GymBro",
        desc: 'Metiste 50kg y dijiste "está leve".',
        completado: false,
      },
      {
        titulo: "Pecho de Paloma",
        desc: "Levantaste 80kg y te viste al espejo 5 minutos.",
        completado: false,
      },
      {
        titulo: "Pecho Planetario",
        desc: "Llegaste a los 100kg. Ahora te respetan en Smart Fit.",
        completado: false,
      },
      {
        titulo: "Modo Demonio",
        desc: "Metiste 120kg sin gritar. Leyenda local.",
        completado: false,
      },
      {
        titulo: "Dios del Pecho",
        desc: "150kg. Nadie te habla, todos te admiran.",
        completado: false,
      },
    ],
    carrera: [
      {
        titulo: "Comencé a Sudar",
        desc: "Corriste tu primer 1km sin morir.",
        completado: false,
      },
      {
        titulo: "Runner del Oxxo",
        desc: "2km sin parar, ni por un Gatorade.",
        completado: false,
      },
      {
        titulo: "Huye del Ex",
        desc: "5km sin detenerte. Motivación cuestionable.",
        completado: false,
      },
      { titulo: "Modo Keniano", desc: "10km como si nada.", completado: false },
      {
        titulo: "Semi-Maratonista Emocional",
        desc: "21km preguntándote por qué haces esto.",
        completado: false,
      },
      {
        titulo: "Maratonista Existencial",
        desc: "42km para sanar traumas.",
        completado: false,
      },
    ],
    sociales: [
      {
        titulo: "No estoy solo",
        desc: "Agregaste a tu primer amigo.",
        completado: false,
      },
      {
        titulo: "Círculo de Hierro",
        desc: "5 amigos del gym. Todos mamados.",
        completado: false,
      },
      {
        titulo: "Clan Fitness",
        desc: "10 amigos que sí entrenan.",
        completado: false,
      },
      {
        titulo: "Red de Mamados",
        desc: '25 amigos, todos preguntan: "¿hoy qué toca?"',
        completado: false,
      },
      {
        titulo: "Influencer Fit Regional",
        desc: "50 amigos y te piden rutinas.",
        completado: false,
      },
    ],
    constancia: [
      {
        titulo: "Primer Día Sin Excusas",
        desc: "Completaste tu primer entrenamiento.",
        completado: false,
      },
      {
        titulo: "Sin Yolanda Maricarmen",
        desc: "7 días seguidos sin llorar.",
        completado: false,
      },
      {
        titulo: "Mes Sin Vicios",
        desc: "30 días sin faltar... ni al cardio.",
        completado: false,
      },
      {
        titulo: "90 Días Renacido",
        desc: "Trimestre sin fallar. Ya te habla el entrenador.",
        completado: false,
      },
      {
        titulo: "Año Santificado",
        desc: "365 días. Te conviertes en mito.",
        completado: false,
      },
    ],
  });

  const toggleLogro = (categoria, index) => {
    const copia = { ...logros };
    copia[categoria][index].completado = !copia[categoria][index].completado;
    setLogros(copia);
  };

  const calcularProgreso = (categoria) => {
    const total = logros[categoria].length;
    const completados = logros[categoria].filter((l) => l.completado).length;
    return Math.round((completados / total) * 100);
  };

  const styles = `
    @keyframes completado {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }

    @keyframes checkmark {
      0% { transform: scale(0) rotate(0deg); }
      50% { transform: scale(1.2) rotate(180deg); }
      100% { transform: scale(1) rotate(360deg); }
    }

    .logro-card {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .logro-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
    }

    .logro-card.completado {
      animation: completado 0.5s ease-out;
    }

    .checkmark {
      animation: checkmark 0.5s ease-out;
    }

    @media (max-width: 1200px) {
      .grid-logros {
        grid-template-columns: repeat(3, 1fr) !important;
      }
    }

    @media (max-width: 768px) {
      .grid-logros {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }

    @media (max-width: 480px) {
      .grid-logros {
        grid-template-columns: 1fr !important;
      }
    }
  `;

  const pageStyle = {
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    minHeight: "100vh",
    padding: "60px 20px",
  };

  const containerStyle = {
    maxWidth: "1400px",
    margin: "0 auto",
  };

  const titleStyle = {
    fontSize: "48px",
    fontWeight: "900",
    textAlign: "center",
    marginBottom: "20px",
    color: "#1a1a1a",
    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
  };

  const subtitleStyle = {
    fontSize: "18px",
    textAlign: "center",
    marginBottom: "50px",
    color: "#666",
  };

  const sectionStyle = {
    marginBottom: "60px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  };

  const sectionHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    paddingBottom: "20px",
    borderBottom: "3px solid #f0f0f0",
  };

  const sectionTitleStyle = {
    fontSize: "32px",
    fontWeight: "800",
    color: "#1a1a1a",
    margin: 0,
  };

  const progresoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  };

  const progresoBarContainerStyle = {
    width: "200px",
    height: "10px",
    backgroundColor: "#e0e0e0",
    borderRadius: "10px",
    overflow: "hidden",
  };

  const progresoBarStyle = (porcentaje) => ({
    height: "100%",
    width: `${porcentaje}%`,
    backgroundColor: porcentaje === 100 ? "#10b981" : "#3b82f6",
    transition: "width 0.5s ease-out",
    borderRadius: "10px",
  });

  const progresoTextStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#666",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "25px",
  };

  const cardStyle = (completado) => ({
    backgroundColor: completado ? "#f3f4f6" : "#ffffff",
    border: completado ? "3px solid #d1d5db" : "3px solid #e5e7eb",
    borderRadius: "16px",
    padding: "24px",
    cursor: "pointer",
    boxShadow: completado
      ? "0 4px 6px rgba(0,0,0,0.05)"
      : "0 4px 12px rgba(0,0,0,0.08)",
    position: "relative",
    overflow: "hidden",
  });

  const iconContainerStyle = (completado) => ({
    width: "50px",
    height: "50px",
    borderRadius: "12px",
    backgroundColor: completado ? "#9ca3af" : "#000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
    fontSize: "24px",
    color: "#ffffff",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  });

  const cardTitleStyle = (completado) => ({
    fontSize: "20px",
    fontWeight: "700",
    color: completado ? "#6b7280" : "#1a1a1a",
    marginBottom: "10px",
    lineHeight: "1.3",
  });

  const cardDescStyle = (completado) => ({
    color: completado ? "#9ca3af" : "#4b5563",
    fontSize: "15px",
    lineHeight: "1.5",
    marginBottom: "12px",
  });

  const completadoBadgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "#10b981",
    color: "#ffffff",
    padding: "8px 14px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "700",
    marginTop: "10px",
  };

  const categoriasInfo = {
    press: { inicial: "P", color: "#ef4444" },
    carrera: { inicial: "C", color: "#3b82f6" },
    sociales: { inicial: "S", color: "#8b5cf6" },
    constancia: { inicial: "D", color: "#f59e0b" },
  };

  return (
    <>
      <style>{styles}</style>
      <div style={pageStyle}>
        <div style={containerStyle}>
          <h1 style={titleStyle}>Tus Logros</h1>
          <p style={subtitleStyle}>
            Completa desafíos y desbloquea logros épicos en tu viaje fitness
          </p>

          {Object.entries(logros).map(([categoria, lista]) => {
            const progreso = calcularProgreso(categoria);
            const info = categoriasInfo[categoria];

            return (
              <div key={categoria} style={sectionStyle}>
                <div style={sectionHeaderStyle}>
                  <h2 style={sectionTitleStyle}>
                    {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                  </h2>
                  <div style={progresoStyle}>
                    <div style={progresoBarContainerStyle}>
                      <div style={progresoBarStyle(progreso)}></div>
                    </div>
                    <span style={progresoTextStyle}>{progreso}%</span>
                  </div>
                </div>

                <div style={gridStyle} className="grid-logros">
                  {lista.map((logro, i) => (
                    <div
                      key={i}
                      style={cardStyle(logro.completado)}
                      className={`logro-card ${
                        logro.completado ? "completado" : ""
                      }`}
                      onClick={() => toggleLogro(categoria, i)}
                    >
                      <div style={iconContainerStyle(logro.completado)}>
                        {logro.completado ? "✓" : info.inicial}
                      </div>
                      <h3 style={cardTitleStyle(logro.completado)}>
                        {logro.titulo}
                      </h3>
                      <p style={cardDescStyle(logro.completado)}>
                        {logro.desc}
                      </p>
                      {logro.completado && (
                        <div style={completadoBadgeStyle} className="checkmark">
                          <span>✓</span>
                          <span>Logro Completado</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
