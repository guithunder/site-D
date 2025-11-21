<div align="center">
	<img src="public/favicon.svg" height="90" alt="Logo Testify" />
	<h1>Testify – Correção Rápida de Gabaritos</h1>
	<p>Landing page do projeto Testify. Professores geram gabaritos, aplicam provas e corrigem centenas de respostas em segundos usando a câmera do celular.</p>
</div>

## 📌 Visão Geral

O Testify reduz drasticamente o tempo gasto na correção de avaliações de múltipla escolha. A landing apresenta proposta, tutorial rápido e download do aplicativo Android.

## 🚀 Principais Recursos (App)

- Geração de folha de respostas (PDF/Imagem) pronta para imprimir
- Correção automática via câmera (reconhecimento de marcações)
- Armazenamento de resultados / estatísticas básicas (planejado)
- Interface simples e acessível para uso em sala

## 🧩 Stack da Landing

- React 19 + Vite 7
- Sass (SCSS) modular – sem Tailwind
- ESLint 9 (Flat Config)
- Ícones: Lucide / React Icons

## 📥 Download do APK

Última versão estável: **v1.0.0**

Link direto (GitHub Releases):

```
https://github.com/guithunder/site-D/releases/download/v1.0.0/TestifyApp.apk
```

Integridade (SHA256):

```
fcdf3363e11932759ee45444920a4050dace2ced9d6d42e3762e8feada5bf0ce
```

> Dica: Professores podem compartilhar este link diretamente com alunos que utilizem dispositivos Android (fora da Play Store nesta fase inicial).

## 🛠 Instalação (Dev)

```bash
git clone https://github.com/guithunder/site-D.git
cd site-D
npm install
npm run dev
```

Acesse: `http://localhost:5173`

## 🔨 Build de Produção

```bash
npm run build
npm run preview   # Opcional: servir a pasta dist localmente
```

Saída gerada em `dist/`.

## 📁 Estrutura Essencial

```
src/
	main.jsx        # Ponto de entrada
	App.jsx         # Componente principal + seções
	index.scss      # Estilos globais utilitários
public/           # Assets estáticos (favicons, etc.)
```

Configuração:

```
vite.config.js    # Vite + plugins
eslint.config.js  # ESLint flat
postcss.config.js # Placeholder (sem Tailwind)
```

## 🎨 Estilos & Convenções

Classes utilitárias foram definidas manualmente em `index.scss` substituindo antigas classes de utilitários. Breakpoints:

```scss
$sm: 640px;
$md: 768px;
$lg: 1024px;
```

Paleta centralizada temporariamente em `App.jsx` (objeto `colors`). Pode ser migrada para variáveis Sass via `:root` ou mapa Sass.

## ♿ Acessibilidade

- Texto alternativo e `aria-label` em elementos interativos
- Contraste testado manualmente
- Suporte parcial a `prefers-reduced-motion` para animações do hero

Melhorias planejadas:

- Dark mode com CSS custom properties
- Testes automáticos de acessibilidade (axe / pa11y) em CI
- Internacionalização (pt-BR / en-US)

## ✅ Scripts

| Comando           | Função                           |
| ----------------- | -------------------------------- |
| `npm run dev`     | Servidor desenvolvimento com HMR |
| `npm run build`   | Build otimizada produção         |
| `npm run preview` | Servir build para verificação    |
| `npm run lint`    | Executar ESLint                  |

## 🤝 Contribuição

1. Abra uma issue descrevendo melhoria ou bug
2. Faça fork / branch (`feat/nome`, `fix/nome`)
3. Rode `npm run lint` antes de abrir PR
4. Adicione descrição clara no Pull Request

## 🔐 Segurança

O APK é distribuído fora da Play Store nesta fase inicial. Recomenda-se verificar o hash e instalar somente de fontes confiáveis. Feedback sobre segurança é bem-vindo via issues.

## 📄 Licença

Projeto acadêmico (Extensão UNINASSAU). Licença poderá ser formalizada (MIT / Apache-2.0) em futura versão.

---

Se precisar migrar paleta para variáveis Sass, integrar testes ou automatizar deploy, abra uma issue ou solicite diretamente.
