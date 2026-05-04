"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main style={styles.main}>
      <nav style={styles.nav}>
        <a href="#sobre-mi" style={styles.navLink}>Sobre mí</a>
        <a href="#proyectos" style={styles.navLink}>Proyectos</a>
        <a href="#habilidades" style={styles.navLink}>Habilidades</a>
        <a href="#contacto" style={styles.navLink}>Contacto</a>
      </nav>

      <header style={styles.header}>
        <div style={{
          ...styles.heroGlow,
          opacity: mounted ? 0.6 : 0,
        }} />
        <h1 style={{
          ...styles.name,
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(40px)",
        }}>
          Antonio Ortega
        </h1>
        <p style={{
          ...styles.subtitle,
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateX(0)" : "translateX(-40px)",
        }}>
          Ingeniero de Computadores
          <span style={styles.location}> 📍 Málaga, España</span>
        </p>
      </header>

      <section id="sobre-mi" style={{
        ...styles.section,
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(30px)",
        transitionDelay: "0.6s",
      }}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.icon}>💻</span> Sobre mí
        </h2>
        <p style={styles.text}>
          Soy <strong>Antonio Ortega</strong>, ingeniero de computadores apasionado por el desarrollo web y las nuevas tecnologías. 
          Actualmente busco oportunidades en el sector tecnológico en <strong>Málaga</strong> y laCosta del Sol.
        </p>
        <p style={styles.text}>
          Me especializo en crear soluciones innovadoras, tanto en desarrollo web como en aplicaciones móviles. 
          Siempre estoy aprendiendo y explorando nuevas tecnologías.
        </p>
      </section>

      <section id="proyectos" style={{
        ...styles.section,
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(30px)",
        transitionDelay: "1s",
      }}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.icon}>🚀</span> Proyectos
        </h2>
        <div style={styles.projectsGrid}>
          <article style={styles.projectCard}>
            <div style={styles.projectIcon}>🌐</div>
            <h3 style={styles.projectTitle}>Portfolio Personal</h3>
            <p style={styles.projectDesc}>Este sitio web - mi portfolio personal construido con Next.js y TypeScript</p>
            <div style={styles.projectTech}>
              <span style={styles.techTag}>Next.js</span>
              <span style={styles.techTag}>TypeScript</span>
              <span style={styles.techTag}>React</span>
            </div>
          </article>
          <article style={styles.projectCard}>
            <div style={styles.projectIcon}>📱</div>
            <h3 style={styles.projectTitle}>Healthy Habits</h3>
            <p style={styles.projectDesc}>Aplicación móvil paraAndroid desarrollada en Kotlin con Jetpack Compose. Permite gestionar hábitos saludables con seguimiento diario y estadísticas.</p>
            <div style={styles.projectTech}>
              <span style={styles.techTag}>Android</span>
              <span style={styles.techTag}>Kotlin</span>
              <span style={styles.techTag}>Jetpack Compose</span>
            </div>
          </article>
        </div>
      </section>

      <section id="habilidades" style={{
        ...styles.section,
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(30px)",
        transitionDelay: "1.2s",
      }}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.icon}>⚡</span> Habilidades
        </h2>
        <div style={styles.skillsGrid}>
          <div style={styles.skillCategory}>
            <h3 style={styles.skillTitle}>Desarrollo Web</h3>
            <div style={styles.skillTags}>
              <span style={styles.skillTag}>Next.js</span>
              <span style={styles.skillTag}>React</span>
              <span style={styles.skillTag}>TypeScript</span>
              <span style={styles.skillTag}>HTML/CSS</span>
              <span style={styles.skillTag}>JavaScript</span>
            </div>
          </div>
          <div style={styles.skillCategory}>
            <h3 style={styles.skillTitle}>Desarrollo Móvil</h3>
            <div style={styles.skillTags}>
              <span style={styles.skillTag}>Android</span>
              <span style={styles.skillTag}>Kotlin</span>
              <span style={styles.skillTag}>Jetpack Compose</span>
              <span style={styles.skillTag}>XML</span>
            </div>
          </div>
          <div style={styles.skillCategory}>
            <h3 style={styles.skillTitle}>Otros</h3>
            <div style={styles.skillTags}>
              <span style={styles.skillTag}>Git</span>
              <span style={styles.skillTag}>SQL</span>
              <span style={styles.skillTag}>Python</span>
              <span style={styles.skillTag}>Linux</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" style={{
        ...styles.section,
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(30px)",
        transitionDelay: "1.4s",
      }}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.icon}>📧</span> Contacto
        </h2>
        <p style={styles.text}>
          ¿Necesitas un desarrollador web o móvil en Málaga? ¿Quieres colaborar en un proyecto? 
          ¡Escríbeme!
        </p>
        <a 
          href="mailto:antonioortegarivas99@gmail.com" 
          style={styles.emailButton}
        >
          📧 antonioortegarivas99@gmail.com
        </a>
      </section>

      <footer style={styles.footer}>
        <p>© 2026 Antonio Ortega - Ingeniero de Computadores en Málaga</p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Antonio Ortega",
            jobTitle: "Ingeniero de Computadores",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Málaga",
              addressRegion: "Andalucía",
              addressCountry: "ES"
            },
            email: "antonioortegarivas99@gmail.com",
            url: "https://antonioortega.online",
            knowsAbout: ["Desarrollo Web", "Android", "Kotlin", "Next.js", "React"],
            description: "Ingeniero de computadores especializado en desarrollo web y aplicaciones móviles en Málaga, España."
          })
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: linear-gradient(135deg, #0a0a0f 0%, #12121f 50%, #0d0d18 100%);
          min-height: 100vh;
        }

        main {
          min-height: 100vh;
          padding: 6rem 2rem 4rem;
          max-width: 950px;
          margin: 0 auto;
          font-family: 'Inter', system-ui, sans-serif;
        }

        h1, h2, h3, p, span, a {
          transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          padding: 1.25rem 2rem;
          background: rgba(10, 10, 15, 0.85);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          z-index: 100;
        }

        nav a {
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }

        nav a:hover {
          color: #fff;
        }

        nav a::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #a78bfa, #c084fc);
          transition: width 0.3s ease;
        }

        nav a:hover::after {
          width: 100%;
        }
      `}</style>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    padding: "6rem 2rem 4rem",
    maxWidth: "950px",
    margin: "0 auto",
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  nav: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    display: "flex" as const,
    justifyContent: "center" as const,
    gap: "2.5rem",
    padding: "1.25rem 2rem",
    background: "rgba(10, 10, 15, 0.85)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    zIndex: 100,
  },
  navLink: {
    color: "rgba(255,255,255,0.65)",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: 500,
    transition: "color 0.3s ease",
  } as React.CSSProperties,
  header: {
    marginBottom: "4rem",
    paddingTop: "2rem",
    position: "relative" as const,
  },
  heroGlow: {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(167,139,250,0.3) 0%, transparent 70%)",
    filter: "blur(60px)",
    zIndex: -1,
    transition: "opacity 2s ease",
  } as React.CSSProperties,
  name: {
    fontSize: "4rem",
    fontWeight: 700,
    marginBottom: "0.75rem",
    background: "linear-gradient(135deg, #fff 0%, #e2e8f0 25%, #a78bfa 50%, #e2e8f0 75%, #fff 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.03em",
  } as React.CSSProperties,
  subtitle: {
    color: "rgba(255,255,255,0.7)",
    fontSize: "1.4rem",
    fontWeight: 400,
  },
  location: {
    color: "rgba(167,139,250,0.9)",
    fontWeight: 500,
  } as React.CSSProperties,
  section: {
    marginBottom: "4rem",
    opacity: 0,
    transform: "translateY(30px)",
    transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: "1.9rem",
    fontWeight: 600,
    marginBottom: "1.75rem",
    position: "relative" as const,
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  } as React.CSSProperties,
  icon: {
    fontSize: "1.5rem",
  } as React.CSSProperties,
  text: {
    color: "rgba(255,255,255,0.75)",
    lineHeight: 1.85,
    fontSize: "1.1rem",
    marginBottom: "1rem",
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.75rem",
  },
  projectCard: {
    background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
    padding: "2rem",
    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  } as React.CSSProperties,
  projectIcon: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  projectTitle: {
    color: "#fff",
    fontSize: "1.35rem",
    fontWeight: 600,
    marginBottom: "0.75rem",
  },
  projectDesc: {
    color: "rgba(255,255,255,0.65)",
    marginBottom: "1.25rem",
    fontSize: "0.95rem",
    lineHeight: 1.7,
  },
  projectTech: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "0.5rem",
  },
  techTag: {
    fontSize: "0.75rem",
    color: "#a78bfa",
    background: "rgba(167,139,250,0.12)",
    padding: "0.35rem 0.7rem",
    borderRadius: "20px",
    border: "1px solid rgba(167,139,250,0.2)",
  } as React.CSSProperties,
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
  },
  skillCategory: {
    background: "rgba(255,255,255,0.04)",
    borderRadius: "16px",
    padding: "1.5rem",
    border: "1px solid rgba(255,255,255,0.06)",
  } as React.CSSProperties,
  skillTitle: {
    color: "#fff",
    fontSize: "1.1rem",
    fontWeight: 600,
    marginBottom: "1rem",
  },
  skillTags: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "0.5rem",
  },
  skillTag: {
    fontSize: "0.85rem",
    color: "rgba(255,255,255,0.75)",
    background: "rgba(255,255,255,0.08)",
    padding: "0.4rem 0.75rem",
    borderRadius: "8px",
  } as React.CSSProperties,
  footer: {
    marginTop: "3rem",
    paddingTop: "2rem",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    color: "rgba(255,255,255,0.4)",
    fontSize: "0.9rem",
    textAlign: "center" as const,
  } as React.CSSProperties,
  emailButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.75rem",
    marginTop: "1.25rem",
    padding: "1.1rem 1.75rem",
    background: "linear-gradient(135deg, rgba(167,139,250,0.2) 0%, rgba(132,94,194,0.2) 100%)",
    border: "1px solid rgba(167,139,250,0.3)",
    borderRadius: "14px",
    color: "#c084fc",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 500,
    transition: "all 0.3s ease",
  } as React.CSSProperties,
};