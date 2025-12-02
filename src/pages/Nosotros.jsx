import React from "react";

export default function Nosotros() {
  const pageStyle = {
    backgroundColor: "#FFFFFF",
    minHeight: "calc(100vh - 80px)",
    padding: "40px 20px",
    overflowY: "auto",
  };

  const titleStyle = {
    fontSize: "42px",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "40px",
    color: "#111111",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    padding: "20px",
    textAlign: "center",
    transition: "transform 0.2s ease",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    marginBottom: "15px",
  };

  const cardTitleStyle = {
    fontSize: "20px",
    fontWeight: "700",
    color: "#222222",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "15px",
    color: "#666666",
    lineHeight: "1.6",
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Sobre Nosotros</h1>

      <div style={gridStyle}>
        {/* CARD 1 */}
        <div style={cardStyle}>
          <img
            src="https://davidlaid.com/cdn/shop/products/David-Laid.04_480x480.jpg?v=1553585645"
            alt="Imagen"
            style={imgStyle}
          />
          <h3 style={cardTitleStyle}>Nuestra Misión</h3>
          <p style={textStyle}>
            En CATHARSIS buscamos ayudarte a transformar tu cuerpo y mente
            mediante disciplina, comunidad y motivación real.
          </p>
        </div>

        {/* CARD 2 */}
        <div style={cardStyle}>
          <img
            src="https://davidlaid.com/cdn/shop/products/David-Laid.04_480x480.jpg?v=1553585645"
            alt="Imagen"
            style={imgStyle}
          />
          <h3 style={cardTitleStyle}>Compromiso</h3>
          <p style={textStyle}>
            Creemos en el progreso constante. Te damos las herramientas para
            avanzar cada día hacia tu mejor versión.
          </p>
        </div>

        {/* CARD 3 */}
        <div style={cardStyle}>
          <img
            src="https://davidlaid.com/cdn/shop/products/David-Laid.04_480x480.jpg?v=1553585645"
            alt="Imagen"
            style={imgStyle}
          />
          <h3 style={cardTitleStyle}>Filosofía</h3>
          <p style={textStyle}>
            Juntos somos más fuertes. La comunidad CATHARSIS impulsa tu pasión
            por el fitness y el crecimiento personal.
          </p>
        </div>
      </div>

      {/* ======= POPULAR EN ESTE MOMENTO 11111111111 ======= */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "60px 40px" }}>
        {/* TÍTULO */}
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "800",
            marginBottom: "25px",
          }}
        >
          POPULAR EN ESTE MOMENTO
        </h2>

        {/* BOTONES MUJERES / HOMBRES */}
        <div style={{ display: "flex", gap: "15px", marginBottom: "40px" }}>
          <button
            style={{
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              padding: "12px 28px",
              borderRadius: "30px",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            MUJERES
          </button>

          <button
            style={{
              backgroundColor: "#fff",
              color: "#000",
              border: "2px solid #000",
              padding: "12px 28px",
              borderRadius: "30px",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            HOMBRES
          </button>
        </div>

        {/* GRID DE 4 COLECCIONES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
          }}
        >
          {/* COLECCION 1 */}
          <div>
            <img
              src="https://davidlaid.com/cdn/shop/products/David-Laid.04_480x480.jpg?v=1553585645"
              alt="img"
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />
            <h3
              style={{
                fontWeight: "800",
                fontSize: "18px",
                marginBottom: "5px",
              }}
            >
              VERANO TRANSPARENTE
            </h3>
            <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.6" }}>
              Ligero, fresco y listo para esos días donde el sol nunca falla.
            </p>
          </div>

          {/* COLECCION 2 */}
          <div>
            <img
              src="https://davidlaid.com/cdn/shop/products/David-Laid.04_480x480.jpg?v=1553585645"
              alt="img"
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />
            <h3
              style={{
                fontWeight: "800",
                fontSize: "18px",
                marginBottom: "5px",
              }}
            >
              INVIERNO EXÓTICO
            </h3>
            <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.6" }}>
              Estilo cálido, capas suaves y un toque salvaje para el frío.
            </p>
          </div>

          {/* COLECCION 3 (inventada) */}
          <div>
            <img
              src="https://davidlaid.com/cdn/shop/products/David-Laid.04_480x480.jpg?v=1553585645"
              alt="img"
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />
            <h3
              style={{
                fontWeight: "800",
                fontSize: "18px",
                marginBottom: "5px",
              }}
            >
              RUTINA ÉLITE
            </h3>
            <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.6" }}>
              Rendimiento premium para tus entrenamientos más serios.
            </p>
          </div>

          {/* COLECCION 4 (inventada) */}
          <div>
            <img
              src="https://davidlaid.com/cdn/shop/products/David-Laid.04_480x480.jpg?v=1553585645"
              alt="img"
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />
            <h3
              style={{
                fontWeight: "800",
                fontSize: "18px",
                marginBottom: "5px",
              }}
            >
              CONQUISTA NOCTURNA
            </h3>
            <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.6" }}>
              Ropa diseñada para quienes brillan cuando todos duermen.
            </p>
          </div>
        </div>
      </section>

      {/* ======= POPULAR EN ESTE MOMENTO 22222222222 ======= */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "60px 40px" }}>
        {/* TÍTULO */}
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "800",
            marginBottom: "25px",
          }}
        >
          COLECCIÓN Winter Arc
        </h2>

        {/* BOTONES MUJERES / HOMBRES */}
        <div style={{ display: "flex", gap: "15px", marginBottom: "40px" }}>
          <button
            style={{
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              padding: "12px 28px",
              borderRadius: "30px",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            MUJERES
          </button>

          <button
            style={{
              backgroundColor: "#fff",
              color: "#000",
              border: "2px solid #000",
              padding: "12px 28px",
              borderRadius: "30px",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            HOMBRES
          </button>
        </div>

        {/* GRID DE 4 COLECCIONES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
          }}
        >
          {/* COLECCION 1 */}
          <div>
            <img
              src="https://davidlaid.com/cdn/shop/products/David-Laid.04_480x480.jpg?v=1553585645"
              alt="img"
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />
            <h3
              style={{
                fontWeight: "800",
                fontSize: "18px",
                marginBottom: "5px",
              }}
            >
              VERANO TRANSPARENTE
            </h3>
            <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.6" }}>
              Ligero, fresco y listo para esos días donde el sol nunca falla.
            </p>
          </div>

          {/* COLECCION 2 */}
          <div>
            <img
              src="https://davidlaid.com/cdn/shop/products/David-Laid.04_480x480.jpg?v=1553585645"
              alt="img"
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />
            <h3
              style={{
                fontWeight: "800",
                fontSize: "18px",
                marginBottom: "5px",
              }}
            >
              INVIERNO EXÓTICO
            </h3>
            <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.6" }}>
              Estilo cálido, capas suaves y un toque salvaje para el frío.
            </p>
          </div>

          {/* COLECCION 3 (inventada) */}
          <div>
            <img
              src="https://davidlaid.com/cdn/shop/products/David-Laid.04_480x480.jpg?v=1553585645"
              alt="img"
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />
            <h3
              style={{
                fontWeight: "800",
                fontSize: "18px",
                marginBottom: "5px",
              }}
            >
              RUTINA ÉLITE
            </h3>
            <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.6" }}>
              Rendimiento premium para tus entrenamientos más serios.
            </p>
          </div>

          {/* COLECCION 4 (inventada) */}
          <div>
            <img
              src="https://davidlaid.com/cdn/shop/products/David-Laid.04_480x480.jpg?v=1553585645"
              alt="img"
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />
            <h3
              style={{
                fontWeight: "800",
                fontSize: "18px",
                marginBottom: "5px",
              }}
            >
              CONQUISTA NOCTURNA
            </h3>
            <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.6" }}>
              Ropa diseñada para quienes brillan cuando todos duermen.
            </p>
          </div>
        </div>
      </section>
      {/* ======= FOOTER GYMSHARK STYLE ======= */}
      <footer
        style={{
          backgroundColor: "#FFFFFF",
          padding: "60px 40px",
          marginTop: "60px",
          borderTop: "1px solid #e5e5e5",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* AYUDA */}
          <div>
            <h3 style={{ fontWeight: "700", marginBottom: "15px" }}>AYUDA</h3>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.9" }}>
              <li>FAQ</li>
              <li>Información De Entrega</li>
              <li>Política De Devoluciones</li>
              <li>Make A Return</li>
              <li>Pedidos</li>
              <li>Denunciar una página falsa</li>
            </ul>
          </div>

          {/* MI CUENTA */}
          <div>
            <h3 style={{ fontWeight: "700", marginBottom: "15px" }}>
              MI CUENTA
            </h3>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.9" }}>
              <li>Login</li>
              <li>Registrar</li>
            </ul>
          </div>

          {/* PAGINAS */}
          <div>
            <h3 style={{ fontWeight: "700", marginBottom: "15px" }}>PÁGINAS</h3>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.9" }}>
              <li>Stores</li>
              <li>Recomienda a Un Amigo</li>
              <li>Gymshark Central</li>
              <li>Gymshark Loyalty</li>
              <li>Sobre Nosotros</li>
              <li>Carreras</li>
              <li>Descuento Para Estudiantes</li>
              <li>Training App</li>
              <li>Descuento Para Veteranos</li>
              <li>Declaración De Accesibilidad</li>
              <li>Lista De Fábricas</li>
              <li>Sostenibilidad</li>
            </ul>
          </div>

          {/* MÁS SOBRE GYMSHARK */}
          <div>
            <h3 style={{ fontWeight: "700", marginBottom: "15px" }}>
              MÁS SOBRE GYMSHARK
            </h3>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  padding: "20px",
                }}
              >
                <strong>GYMSHARK CENTRAL</strong>
                <div
                  style={{
                    backgroundColor: "#eee",
                    color: "#000",
                    padding: "10px",
                    marginTop: "10px",
                  }}
                >
                  BLOG
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  padding: "20px",
                }}
              >
                <strong>GYMSHARK STUDENTS</strong>
                <div
                  style={{
                    backgroundColor: "#eee",
                    color: "#000",
                    padding: "10px",
                    marginTop: "10px",
                  }}
                >
                  15% STUDENT DISCOUNT
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  padding: "20px",
                }}
              >
                <strong>📧</strong>
                <div
                  style={{
                    backgroundColor: "#eee",
                    color: "#000",
                    padding: "10px",
                    marginTop: "10px",
                  }}
                >
                  INSCRIBIRSE POR CORREO ELECTRÓNICO
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ICONOS ABAJO */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            fontSize: "22px",
          }}
        >
          <span>🌐</span>
          <span>📘</span>
          <span>📸</span>
          <span>▶️</span>
          <span>📌</span>
          <span>🐦</span>
          <span>🎵</span>
        </div>
      </footer>
    </div>
  );
}
