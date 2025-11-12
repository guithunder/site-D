// src/App.jsx
import React from "react";
import {
  Atom,
  Smartphone,
  Bot,
  Apple,
  BookOpen,
  Camera,
  CheckSquare,
  Printer,
  Link as LinkIcon,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

/* -----------------------
   PALETA DE CORES (JS)
   ----------------------- */
const colors = {
  principalEscura: "#346a74", // Verde/Azul escuro
  principalClara: "#a1d5d1", // Verde/Menta claro
  fundo: "#f0f8f8", // Quase branco
  textoEscuro: "#333333",
  textoClaro: "#FFFFFF",
  desabilitado: "#AAAAAA",
};

/* -----------------------
   ESTILO ANIMAÇÃO (rotação lenta do ícone)
   ----------------------- */
const customStyles = `
  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spinSlow 10s linear infinite;
  }
`;

/* -----------------------
   HEADER
   - fixo no topo; dá offset para o main via padding-top
   ----------------------- */
const Header = () => (
  <header
    className="app-header"
    style={{ backgroundColor: colors.principalClara }}
  >
    <div className="container header-row">
      <div className="brand">
        <Atom
          className="spin-slow"
          style={{ color: colors.principalEscura }}
          size={32}
        />
        <span style={{ color: colors.textoEscuro, fontWeight: 800 }}>
          Testify
        </span>
      </div>
    </div>
  </header>
);

/* -----------------------
   HERO
   - remove min-h-screen; usa padding adequado
   - limita largura do mockup e do conteúdo
   ----------------------- */
const Hero = () => (
  <section
    className="section section-hero"
    style={{ backgroundColor: colors.fundo }}
  >
    <div className="container hero-grid">
      <div className="text-center md-text-left">
        <h1 className="title-xl" style={{ color: colors.principalEscura }}>
          Chega de Corrigir Provas Manualmente.
        </h1>
        <p className="lead" style={{ color: colors.textoEscuro }}>
          Use o Testify para corrigir gabaritos de múltipla escolha em segundos
          usando apenas a câmera do seu celular.
        </p>
      </div>
      <div className="mockup-wrap">
        <div
          className="phone-mockup"
          style={{
            backgroundColor: colors.principalEscura,
            border: "6px solid #28545a",
          }}
        >
          <div
            className="phone-inner"
            style={{ backgroundColor: colors.textoClaro }}
          >
            <Smartphone size={48} style={{ color: colors.desabilitado }} />
            <p style={{ color: colors.desabilitado, fontWeight: 600 }}>
              Mock-up do App em Ação
            </p>
            <p
              style={{
                color: colors.desabilitado,
                fontSize: ".875rem",
                textAlign: "center",
              }}
            >
              (Interface minimalista e intuitiva)
            </p>
          </div>
          <div
            className="notch"
            style={{ backgroundColor: colors.principalEscura }}
          />
        </div>
      </div>
    </div>
  </section>
);

/* -----------------------
   DOWNLOAD
   - diminui o padding para evitar faixas enormes
   - botões responsivos
   ----------------------- */
const Download = () => {
  return (
    <section
      id="download"
      className="section-download"
      style={{ backgroundColor: colors.principalClara }}
    >
      <div className="container">
        <h2 className="heading-2" style={{ color: colors.textoEscuro }}>
          Baixe Agora
        </h2>
        <div className="btns">
          <a
            href="#"
            aria-label="Baixar aplicativo Testify para Android (arquivo .apk)"
            className="btn btn-primary"
            style={{
              backgroundColor: colors.principalEscura,
              color: colors.textoClaro,
            }}
          >
            <Bot size={20} /> <span>Baixar para Android (.apk)</span>
          </a>
          <div
            className="btn btn-disabled"
            style={{
              backgroundColor: colors.desabilitado,
              color: colors.textoClaro,
            }}
            aria-disabled="true"
          >
            <Apple size={20} /> <span>Em breve na App Store</span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -----------------------
   COMPONENTES DO TUTORIAL
   ----------------------- */
const TutorialStep = ({ icon: Icon, title, description }) => (
  <div className="tutorial-step">
    <div
      className="icon-circle"
      style={{ backgroundColor: colors.principalEscura }}
    >
      <Icon size={20} style={{ color: colors.textoClaro }} />
    </div>
    <div>
      <h3
        className="text-lg font-semibold"
        style={{ color: colors.principalEscura }}
      >
        {title}
      </h3>
      <p className="text-sm" style={{ color: colors.textoEscuro }}>
        {description}
      </p>
    </div>
  </div>
);

const Tutorial = () => (
  <section
    id="tutorial"
    className="section"
    style={{ backgroundColor: colors.fundo }}
  >
    <div className="container">
      <h2
        className="heading-2"
        style={{ color: colors.principalEscura, textAlign: "center" }}
      >
        Como Usar
      </h2>
      <div className="grid-2">
        <div>
          <h3
            style={{
              color: colors.textoEscuro,
              fontSize: "1.25rem",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Demonstração em Vídeo
          </h3>
          <div className="video-box" style={{ paddingBottom: "56.25%" }}>
            <iframe
              title="Vídeo Tutorial Testify"
              src="https://www.youtube.com/embed/Q-M8hfX7UUs?si=BYFHhHp6o9idMhHv"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <div>
          <h3
            style={{
              color: colors.textoEscuro,
              fontSize: "1.25rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
            }}
          >
            Tutorial Escrito (Para Professores)
          </h3>
          <TutorialStep
            icon={CheckSquare}
            title="Passo 1: Crie o Gabarito."
            description="Primeiro, informe o título da prova, o número de questões e marque as respostas corretas no app. O Testify gerará um PNG da folha de respostas para você imprimir."
          />
          <TutorialStep
            icon={Printer}
            title="Passo 2: Aplique a Prova."
            description="Imprima e distribua a folha de respostas gerada para seus alunos."
          />
          <TutorialStep
            icon={Camera}
            title="Passo 3: Corrija Instantaneamente."
            description="Use a câmera do app para escanear as provas preenchidas. O Testify faz a correção na hora e salva os resultados."
          />
        </div>
      </div>
    </div>
  </section>
);

/* -----------------------
   FOOTER
   ----------------------- */
const Footer = () => (
  <footer
    className="app-footer enhanced"
    style={{
      backgroundColor: colors.principalEscura,
      color: colors.textoClaro,
    }}
  >
    <div className="container footer-grid">
      <div className="footer-brand">
        <div className="brand">
          <Atom className="spin-slow" size={24} />
          <strong>Testify</strong>
        </div>
        <p className="muted">Corrija gabaritos em segundos.</p>
      </div>

      <nav className="footer-nav">
        <span className="footer-heading">Navegação</span>
        <a href="#download">Download</a>
        <a href="#tutorial">Tutorial</a>
      </nav>

      <nav className="footer-code">
        <span className="footer-heading">Código</span>
        <a
          href="https://github.com/guithunder/site-D"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub size={16} /> <span>Site</span> <LinkIcon size={14} />
        </a>
        <a
          href="https://github.com/LevyTavares/testify_app"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub size={16} /> <span>App (Front)</span> <LinkIcon size={14} />
        </a>
        <a
          href="https://github.com/LevyTavares/testify_backend"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub size={16} /> <span>App (Back)</span> <LinkIcon size={14} />
        </a>
      </nav>
    </div>

    <div className="container footer-bottom">
      <p className="text-sm">
        © {new Date().getFullYear()} Testify · Projeto de Extensão UNINASSAU
      </p>
    </div>
  </footer>
);

/* -----------------------
   APP (Principal)
   - inclui padding-top para compensar header fixo
   ----------------------- */
export const App = () => {
  return (
    <>
      <style>{customStyles}</style>

      <div className="app-root" style={{ backgroundColor: colors.fundo }}>
        <Header />
        <main className="main-content">
          <Hero />
          <Download />
          <Tutorial />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
