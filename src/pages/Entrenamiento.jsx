import React from "react";

export default function CoachingLanding() {
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#ffffff",
    },
    heroSection: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "64px 24px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "48px",
      alignItems: "center",
    },
    leftContent: {
      maxWidth: "100%",
    },
    title: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#000000",
      marginBottom: "24px",
      lineHeight: "1.2",
    },
    description: {
      fontSize: "18px",
      color: "#374151",
      marginBottom: "32px",
      lineHeight: "1.6",
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      marginBottom: "16px",
    },
    input: {
      flex: "1",
      padding: "16px 24px",
      border: "2px solid #d1d5db",
      borderRadius: "8px",
      fontSize: "16px",
      outline: "none",
    },
    button: {
      padding: "16px 32px",
      backgroundColor: "#000000",
      color: "#ffffff",
      fontWeight: "600",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      whiteSpace: "nowrap",
    },
    disclaimer: {
      fontSize: "14px",
      color: "#6b7280",
    },
    imageContainer: {
      position: "relative",
    },
    image: {
      width: "100%",
      height: "auto",
      borderRadius: "16px",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    },
    trainingSection: {
      padding: "80px 24px",
    },
    trainingSectionWhite: {
      backgroundColor: "#ffffff",
    },
    trainingSectionGray: {
      backgroundColor: "#f3f4f6",
    },
    trainingContainer: {
      maxWidth: "1280px",
      margin: "0 auto",
    },
    trainingGrid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "64px",
      alignItems: "center",
    },
    trainingImageContainer: {
      position: "relative",
      order: 1,
    },
    trainingImage: {
      width: "100%",
      height: "auto",
      borderRadius: "16px",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
    },
    trainingContent: {
      order: 2,
    },
    trainingTitle: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#000000",
      marginBottom: "24px",
      lineHeight: "1.2",
    },
    trainingText: {
      fontSize: "18px",
      color: "#374151",
      lineHeight: "1.7",
    },
    ctaSection: {
      backgroundColor: "#000000",
      color: "#ffffff",
      padding: "64px 24px",
    },
    ctaContainer: {
      maxWidth: "896px",
      margin: "0 auto",
      textAlign: "center",
    },
    ctaTitle: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "24px",
    },
    ctaText: {
      fontSize: "20px",
      color: "#d1d5db",
      marginBottom: "32px",
    },
    ctaButton: {
      padding: "16px 40px",
      backgroundColor: "#ffffff",
      color: "#000000",
      fontWeight: "600",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      fontSize: "18px",
    },
  };

  const mediaStyles = `
    @media (min-width: 640px) {
      .form-container {
        flex-direction: row !important;
      }
    }
    @media (min-width: 1024px) {
      .hero-grid {
        grid-template-columns: repeat(2, 1fr) !important;
      }
      .hero-title {
        font-size: 60px !important;
      }
      .training-grid {
        grid-template-columns: repeat(2, 1fr) !important;
      }
      .training-title {
        font-size: 56px !important;
      }
      .training-left .training-content {
        order: 1 !important;
      }
      .training-left .training-image-container {
        order: 2 !important;
      }
      .training-right .training-content {
        order: 2 !important;
      }
      .training-right .training-image-container {
        order: 1 !important;
      }
    }
    .button:hover {
      background-color: #1f2937;
    }
    .cta-button:hover {
      background-color: #f3f4f6;
    }
    .input:focus {
      border-color: #000000;
    }
  `;

  const sections = [
    {
      title: "Deliver professional training programs in minutes",
      text: "Deliver training programs, nutrition plans, and habit routines wherever your clients are—online, in person, and everywhere in between.",
      image:
        "https://e0.pxfuel.com/wallpapers/914/862/desktop-wallpaper-david-laid-athletes-gym-fitness-clothing.jpg",
      alt: "Professional training",
    },
    {
      title: "Track progress and results in real-time",
      text: "Monitor your clients' achievements with comprehensive analytics and progress tracking tools that keep everyone motivated and accountable.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
      alt: "Progress tracking",
    },
    {
      title: "Build custom workout libraries",
      text: "Create and organize extensive exercise libraries with video demonstrations, detailed instructions, and personalized modifications for every client.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
      alt: "Workout library",
    },
    {
      title: "Engage clients with automated check-ins",
      text: "Stay connected with your clients through scheduled check-ins, progress photos, and automated reminders that keep them on track.",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
      alt: "Client engagement",
    },
    {
      title: "Scale your coaching business effortlessly",
      text: "Manage unlimited clients, automate your workflows, and grow your revenue without sacrificing the quality of your coaching services.",
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800",
      alt: "Scale business",
    },
  ];

  return (
    <>
      <style>{mediaStyles}</style>
      <div style={styles.container}>
        {/* Hero Section */}
        <div style={styles.heroSection}>
          <div style={styles.grid} className="hero-grid">
            <div style={styles.leftContent}>
              <h1 style={styles.title} className="hero-title">
                La app #1 de coaching para mejorar el compromiso con tus
                clientes
              </h1>

              <p style={styles.description}>
                Lleva tu coaching en línea y ofrece una experiencia como ninguna
                otra que tus clientes hayan visto antes. Con funciones de
                fitness, nutrición y hábitos saludables, más mensajería en la
                app, seguimiento de progreso y más — es todo lo que necesitas
                para motivar e inspirar.
              </p>

              <div style={styles.formContainer} className="form-container">
                <input
                  type="email"
                  placeholder="Ingresa tu correo"
                  style={styles.input}
                  className="input"
                />
                <button style={styles.button} className="button">
                  Comenzar gratis
                </button>
              </div>

              <div style={styles.disclaimer}>
                <p>Comienza tu prueba gratuita de 30 días.</p>
                <p>No se requiere tarjeta de crédito.</p>
              </div>
            </div>

            <div style={styles.imageContainer}>
              <img
                src="https://i0.wp.com/cocinaconmichela.com/wp-content/uploads/2022/11/cesra.png?fit=1080%2C1080&ssl=1"
                alt="Ensalada Caesar saludable"
                style={styles.image}
              />
            </div>
          </div>
        </div>

        {/* Alternating Feature Sections */}
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              ...styles.trainingSection,
              ...(index % 2 === 0
                ? styles.trainingSectionGray
                : styles.trainingSectionWhite),
            }}
          >
            <div style={styles.trainingContainer}>
              <div
                style={styles.trainingGrid}
                className={`training-grid ${
                  index % 2 === 0 ? "training-left" : "training-right"
                }`}
              >
                <div
                  style={styles.trainingContent}
                  className="training-content"
                >
                  <h2 style={styles.trainingTitle} className="training-title">
                    {section.title}
                  </h2>
                  <p style={styles.trainingText}>{section.text}</p>
                </div>

                <div
                  style={styles.trainingImageContainer}
                  className="training-image-container"
                >
                  <img
                    src={section.image}
                    alt={section.alt}
                    style={styles.trainingImage}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div style={styles.ctaSection}>
          <div style={styles.ctaContainer}>
            <h2 style={styles.ctaTitle}>
              Transforma tu negocio de coaching hoy
            </h2>
            <p style={styles.ctaText}>
              Únete a miles de coaches que ya están usando nuestra plataforma
              para hacer crecer su negocio.
            </p>
            <button style={styles.ctaButton} className="cta-button">
              Prueba gratuita por 30 días
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
