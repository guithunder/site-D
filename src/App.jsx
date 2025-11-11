// src/App.jsx
import React from "react";
// Ícones (lucide-react)
import {
  Atom,
  Smartphone,
  Bot,
  Apple,
  BookOpen,
  Camera,
  CheckSquare,
  Printer,
} from "lucide-react";

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
const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full shadow-md z-50"
      style={{ backgroundColor: colors.principalClara }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center">
        <div className="flex items-center space-x-3">
          <Atom
            className="w-8 h-8 animate-spin-slow"
            style={{ color: colors.principalEscura }}
          />
          <span
            className="text-2xl font-extrabold tracking-wide"
            style={{ color: colors.textoEscuro }}
          >
            Testify
          </span>
        </div>
      </div>
    </header>
  );
};

/* -----------------------
   HERO
   - remove min-h-screen; usa padding adequado
   - limita largura do mockup e do conteúdo
   ----------------------- */
const Hero = () => {
  return (
    <section
      className="pt-28 pb-12 md:pt-36 md:pb-20"
      style={{ backgroundColor: colors.fundo }}
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Conteúdo */}
        <div className="text-center md:text-left">
          <h1
            className="text-3xl md:text-5xl font-black mb-4 leading-tight"
            style={{ color: colors.principalEscura }}
          >
            Chega de Corrigir Provas Manualmente.
          </h1>
          <p
            className="text-lg md:text-xl mb-6 font-medium max-w-2xl"
            style={{ color: colors.textoEscuro }}
          >
            Use o Testify para corrigir gabaritos de múltipla escolha em segundos
            usando apenas a câmera do seu celular.
          </p>
        </div>

        {/* Mockup */}
        <div className="flex justify-center md:justify-end">
          <div
            className="relative w-72 h-[420px] rounded-3xl p-2 shadow-2xl transition-transform duration-500 hover:scale-105"
            style={{
              backgroundColor: colors.principalEscura,
              border: "6px solid #28545a",
            }}
          >
            <div
              className="w-full h-full rounded-2xl flex flex-col justify-center items-center p-4"
              style={{ backgroundColor: colors.textoClaro }}
            >
              <Smartphone size={48} style={{ color: colors.desabilitado }} />
              <p className="text-lg font-semibold" style={{ color: colors.desabilitado }}>
                Mock-up do App em Ação
              </p>
              <p className="text-sm text-center" style={{ color: colors.desabilitado }}>
                (Interface minimalista e intuitiva)
              </p>
            </div>

            {/* Notch (estético) */}
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-2 rounded-b-lg"
              style={{ backgroundColor: colors.principalEscura }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* -----------------------
   DOWNLOAD
   - diminui o padding para evitar faixas enormes
   - botões responsivos
   ----------------------- */
const Download = () => {
  const baseButtonStyle =
    "flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-lg transition-transform duration-200 shadow-md";

  return (
    <section id="download" className="py-12" style={{ backgroundColor: colors.principalClara }}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: colors.textoEscuro }}>
          Baixe Agora
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-3xl mx-auto">
          {/* Android ativo */}
          <a
            href="#"
            className={`${baseButtonStyle} w-full sm:w-auto`}
            style={{ backgroundColor: colors.principalEscura, color: colors.textoClaro }}
          >
            <Bot size={20} />
            <span>Baixar para Android (.apk)</span>
          </a>

          {/* iOS desabilitado */}
          <div
            className={`${baseButtonStyle} w-full sm:w-auto opacity-70 cursor-not-allowed`}
            style={{ backgroundColor: colors.desabilitado, color: colors.textoClaro, boxShadow: "none" }}
            aria-disabled="true"
          >
            <Apple size={20} />
            <span>Em breve na App Store</span>
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
  <div className="flex items-start gap-4 mb-6">
    <div
      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow"
      style={{ backgroundColor: colors.principalEscura }}
    >
      <Icon size={20} style={{ color: colors.textoClaro }} />
    </div>
    <div>
      <h3 className="text-lg font-semibold" style={{ color: colors.principalEscura }}>
        {title}
      </h3>
      <p className="text-sm" style={{ color: colors.textoEscuro }}>
        {description}
      </p>
    </div>
  </div>
);

const Tutorial = () => {
  return (
    <section id="tutorial" className="py-12" style={{ backgroundColor: colors.fundo }}>
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: colors.principalEscura }}>
          Como Usar
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Vídeo placeholder */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: colors.textoEscuro }}>
              Demonstração em Vídeo
            </h3>

            <div
              className="relative w-full max-w-xl mx-auto overflow-hidden rounded-xl shadow-xl"
              style={{ paddingBottom: "56.25%" }} // 16:9
            >
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ backgroundColor: colors.desabilitado, color: colors.textoClaro }}
              >
                <BookOpen size={48} />
                <p className="mt-2 text-lg">Placeholder do Vídeo Tutorial</p>
              </div>
            </div>
          </div>

          {/* Tutorial escrito */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ color: colors.textoEscuro }}>
              Tutorial Escrito (Para Professores)
            </h3>

            <div>
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
      </div>
    </section>
  );
};

/* -----------------------
   FOOTER
   ----------------------- */
const Footer = () => {
  return (
    <footer className="py-6" style={{ backgroundColor: colors.principalEscura, color: colors.textoClaro }}>
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">&copy; 2024 Testify - Um Projeto de Extensão UNINASSAU.</p>
      </div>
    </footer>
  );
};

/* -----------------------
   APP (Principal)
   - inclui padding-top para compensar header fixo
   ----------------------- */
export const App = () => {
  return (
    <>
      <style>{customStyles}</style>

      <div className="font-sans antialiased" style={{ backgroundColor: colors.fundo }}>
        <Header />

        {/* O main recebe padding-top para não ficar atrás do header fixo */}
        <main className="pt-20">
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
