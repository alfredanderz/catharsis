import React, { useState } from "react";

export default function Amigos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterNivel, setFilterNivel] = useState("Todos");

  const amigos = [
    {
      id: 1,
      nombre: "Carlos Mendoza",
      nivel: "Avanzado",
      foto: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop",
      entrenamientos: 245,
      racha: 45,
      especialidad: "Powerlifting",
    },
    {
      id: 2,
      nombre: "Maria González",
      nivel: "Intermedio",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      entrenamientos: 156,
      racha: 28,
      especialidad: "CrossFit",
    },
    {
      id: 3,
      nombre: "Juan Pérez",
      nivel: "Principiante",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      entrenamientos: 42,
      racha: 12,
      especialidad: "Cardio",
    },
    {
      id: 4,
      nombre: "Sofia Ramírez",
      nivel: "Avanzado",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      entrenamientos: 312,
      racha: 67,
      especialidad: "Yoga",
    },
    {
      id: 5,
      nombre: "Miguel Torres",
      nivel: "Avanzado",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      entrenamientos: 289,
      racha: 52,
      especialidad: "Calistenia",
    },
    {
      id: 6,
      nombre: "Ana Martínez",
      nivel: "Intermedio",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      entrenamientos: 134,
      racha: 21,
      especialidad: "Running",
    },
    {
      id: 7,
      nombre: "Ana Martínez",
      nivel: "Intermedio",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      entrenamientos: 134,
      racha: 21,
      especialidad: "Running",
    },
    {
      id: 8,
      nombre: "Ana Martínez",
      nivel: "Intermedio",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      entrenamientos: 134,
      racha: 21,
      especialidad: "Running",
    },
    {
      id: 9,
      nombre: "Ana Martínez",
      nivel: "Intermedio",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      entrenamientos: 134,
      racha: 21,
      especialidad: "Running",
    },
  ];

  const nivelColors = {
    Principiante: "#3b82f6",
    Intermedio: "#f59e0b",
    Avanzado: "#10b981",
  };

  const filteredAmigos = amigos.filter((amigo) => {
    const matchesSearch = amigo.nombre
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterNivel === "Todos" || amigo.nivel === filterNivel;
    return matchesSearch && matchesFilter;
  });

  const styles = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .friend-card {
      animation: fadeIn 0.5s ease-out;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .friend-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }

    .friend-avatar {
      transition: transform 0.3s ease;
    }

    .friend-card:hover .friend-avatar {
      transform: scale(1.1);
    }

    .search-input:focus {
      outline: none;
      border-color: #10b981;
      box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
    }

    .filter-btn {
      transition: all 0.2s ease;
    }

    .filter-btn:hover {
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .cards-grid {
        grid-template-columns: 1fr !important;
      }
      .stats-container {
        flex-direction: column !important;
        gap: 15px !important;
      }
    }
  `;

  const pageStyle = {
    background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
    minHeight: "100vh",
    padding: "60px 20px",
    color: "#FFFFFF",
  };

  const containerStyle = {
    maxWidth: "1400px",
    margin: "0 auto",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "50px",
  };

  const titleStyle = {
    fontSize: "56px",
    fontWeight: "900",
    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "15px",
    textTransform: "uppercase",
    letterSpacing: "2px",
  };

  const subtitleStyle = {
    fontSize: "18px",
    color: "#888888",
  };

  const controlsStyle = {
    display: "flex",
    gap: "20px",
    marginBottom: "40px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };

  const searchContainerStyle = {
    flex: "1",
    maxWidth: "400px",
  };

  const searchInputStyle = {
    width: "100%",
    padding: "15px 20px",
    backgroundColor: "#1a1a1a",
    border: "2px solid #333333",
    borderRadius: "12px",
    color: "#ffffff",
    fontSize: "16px",
    transition: "all 0.3s ease",
  };

  const filterContainerStyle = {
    display: "flex",
    gap: "10px",
  };

  const filterBtnStyle = (isActive) => ({
    padding: "12px 24px",
    backgroundColor: isActive ? "#10b981" : "#1a1a1a",
    color: isActive ? "#000000" : "#ffffff",
    border: isActive ? "2px solid #10b981" : "2px solid #333333",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.2s ease",
  });

  const statsBarStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginBottom: "50px",
    padding: "30px",
    backgroundColor: "#1a1a1a",
    borderRadius: "16px",
    border: "1px solid #333333",
  };

  const statItemStyle = {
    textAlign: "center",
  };

  const statValueStyle = {
    fontSize: "36px",
    fontWeight: "900",
    color: "#10b981",
    marginBottom: "5px",
  };

  const statLabelStyle = {
    fontSize: "14px",
    color: "#888888",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const cardsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "30px",
  };

  const cardStyle = {
    backgroundColor: "#1a1a1a",
    borderRadius: "20px",
    padding: "30px",
    border: "2px solid #2a2a2a",
    position: "relative",
    overflow: "hidden",
  };

  const cardHeaderStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "25px",
    gap: "20px",
  };

  const avatarStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #10b981",
  };

  const userInfoStyle = {
    flex: 1,
  };

  const nameStyle = {
    fontSize: "22px",
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: "8px",
  };

  const nivelBadgeStyle = (nivel) => ({
    display: "inline-block",
    padding: "6px 14px",
    backgroundColor: nivelColors[nivel] + "20",
    color: nivelColors[nivel],
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  });

  const especialidadStyle = {
    fontSize: "14px",
    color: "#888888",
    marginTop: "8px",
  };

  const statsContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
    padding: "20px 0",
    borderTop: "1px solid #2a2a2a",
    borderBottom: "1px solid #2a2a2a",
  };

  const miniStatStyle = {
    textAlign: "center",
  };

  const miniStatValueStyle = {
    fontSize: "24px",
    fontWeight: "900",
    color: "#ffffff",
    marginBottom: "5px",
  };

  const miniStatLabelStyle = {
    fontSize: "12px",
    color: "#666666",
    textTransform: "uppercase",
  };

  const buttonGroupStyle = {
    display: "flex",
    gap: "10px",
  };

  const actionBtnStyle = (isPrimary) => ({
    flex: 1,
    padding: "12px 20px",
    backgroundColor: isPrimary ? "#10b981" : "transparent",
    color: isPrimary ? "#000000" : "#ffffff",
    border: isPrimary ? "none" : "2px solid #333333",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.2s ease",
  });

  return (
    <>
      <style>{styles}</style>
      <div style={pageStyle}>
        <div style={containerStyle}>
          <div style={headerStyle}>
            <h1 style={titleStyle}>Tu Red Fitness</h1>
            <p style={subtitleStyle}>
              Conecta, compite y crece junto a tu comunidad
            </p>
            <p style={subtitleStyle}>
              Conoce a personas que entrenan cercas de tu gymnacio y entrenen
              juntos
            </p>
          </div>

          <div style={statsBarStyle} className="stats-container">
            <div style={statItemStyle}>
              <div style={statValueStyle}>{amigos.length}</div>
              <div style={statLabelStyle}>Amigos</div>
            </div>
            <div style={statItemStyle}>
              <div style={statValueStyle}>
                {Math.round(
                  amigos.reduce((sum, a) => sum + a.entrenamientos, 0) /
                    amigos.length
                )}
              </div>
              <div style={statLabelStyle}>Promedio Entrenamientos</div>
            </div>
            <div style={statItemStyle}>
              <div style={statValueStyle}>
                {Math.max(...amigos.map((a) => a.racha))}
              </div>
              <div style={statLabelStyle}>Mejor Racha</div>
            </div>
          </div>

          <div style={controlsStyle}>
            <div style={searchContainerStyle}>
              <input
                type="text"
                placeholder="Buscar amigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={searchInputStyle}
                className="search-input"
              />
            </div>

            <div style={filterContainerStyle}>
              {["Todos", "Principiante", "Intermedio", "Avanzado"].map(
                (nivel) => (
                  <button
                    key={nivel}
                    onClick={() => setFilterNivel(nivel)}
                    style={filterBtnStyle(filterNivel === nivel)}
                    className="filter-btn"
                  >
                    {nivel}
                  </button>
                )
              )}
            </div>
          </div>

          <div style={cardsGridStyle} className="cards-grid">
            {filteredAmigos.map((amigo) => (
              <div key={amigo.id} className="friend-card" style={cardStyle}>
                <div style={cardHeaderStyle}>
                  <img
                    src={amigo.foto}
                    alt={amigo.nombre}
                    style={avatarStyle}
                    className="friend-avatar"
                  />
                  <div style={userInfoStyle}>
                    <h3 style={nameStyle}>{amigo.nombre}</h3>
                    <span style={nivelBadgeStyle(amigo.nivel)}>
                      {amigo.nivel}
                    </span>
                    <p style={especialidadStyle}>{amigo.especialidad}</p>
                  </div>
                </div>

                <div style={statsContainerStyle}>
                  <div style={miniStatStyle}>
                    <div style={miniStatValueStyle}>{amigo.entrenamientos}</div>
                    <div style={miniStatLabelStyle}>Entrenamientos</div>
                  </div>
                  <div style={miniStatStyle}>
                    <div style={miniStatValueStyle}>{amigo.racha}</div>
                    <div style={miniStatLabelStyle}>Días de Racha</div>
                  </div>
                </div>

                <div style={buttonGroupStyle}>
                  <button style={actionBtnStyle(true)}>Ver Perfil</button>
                  <button style={actionBtnStyle(false)}>Mensaje</button>
                </div>
              </div>
            ))}
          </div>

          {filteredAmigos.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "60px 20px",
                color: "#666666",
              }}
            >
              <p style={{ fontSize: "18px" }}>
                No se encontraron amigos con estos criterios
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
