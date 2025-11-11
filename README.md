<div align="center">
	<h1>Testify – Landing Page</h1>
	<p>Aplicação React + Vite com Tailwind CSS v4 para divulgação do app Testify.</p>
</div>

## Tecnologias

- React 19
- Vite 7
- Tailwind CSS 4 (pipeline nova `@import "tailwindcss"`)
- PostCSS + Autoprefixer
- ESLint 9 (flat config)
- Lucide Icons

## Como rodar

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

## Build de Produção

```bash
npm run build
npm run preview
```

Saída gerada em `dist/`.

## Estrutura principal

```
src/
	main.jsx         # Ponto de entrada React
	App.jsx          # Componente principal / seções da landing
	index.css        # Importa Tailwind (v4) + estilos globais opcionais
postcss.config.js  # Plugins PostCSS (tailwind + autoprefixer)
tailwind.config.js # Configuração de conteúdo e tema
```

## Tailwind CSS v4

Estamos usando Tailwind 4: em vez de `@tailwind base; @tailwind components; @tailwind utilities;` utilizamos uma única linha:

```css
@import "tailwindcss";
```

Isso evita que as diretivas `@tailwind` vazem para o build final. Caso seu `dist/assets/index-*.css` apareça apenas com as diretivas cruas, verifique:

1. Dependências: `tailwindcss` e `@tailwindcss/postcss` instaladas (já estão no `package.json`).
2. `postcss.config.js` contendo:
   ```js
   import tailwind from "@tailwindcss/postcss";
   import autoprefixer from "autoprefixer";
   export default { plugins: [tailwind(), autoprefixer()] };
   ```
3. Arquivo de entrada (`src/index.css`) usando `@import "tailwindcss";`.
4. O caminho `src/index.css` está realmente importado em `main.jsx`.

Se tudo estiver correto, rodar `npm run build` deve gerar um CSS expandido (sem diretivas). O arquivo enorme contendo muitas variáveis CSS e camadas `@layer` é esperado no Tailwind 4 – ele expõe design tokens via `@layer theme` e propriedades registradas (`@property`).

## Acessibilidade & Perfis

Pontos básicos já seguidos:

- Ícones com propósito semântico onde necessário (`aria-label` nos botões de download)
- Contraste de cores revisado manualmente para leitura.

Melhorias futuras sugeridas:

- Adicionar testes de acessibilidade (ex.: axe-core) em CI
- Adicionar dark mode (tokens adicionais no `theme`)
- Componentizar seções (ex.: `components/`)

## Scripts Disponíveis

| Comando           | Descrição          |
| ----------------- | ------------------ |
| `npm run dev`     | Dev server com HMR |
| `npm run build`   | Build de produção  |
| `npm run preview` | Servir build local |
| `npm run lint`    | Rodar ESLint       |

## Licença

Projeto acadêmico/exemplo. Ajuste a licença conforme necessário.

---

Se tiver dúvidas ou quiser adicionar novas seções, abra uma issue ou continue a conversa. :)
