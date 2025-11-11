<div align="center">
	<h1>Testify – Landing Page</h1>
	<p>Aplicação React + Vite estilizada com Sass (sem Tailwind).</p>
</div>

## Tecnologias

- React 19
- Vite 7
- Sass (`.scss`)
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
	index.scss       # Estilos globais + utilitários Sass do projeto
```

Arquivos de configuração relevantes:

```
vite.config.js     # Config padrão Vite + React
eslint.config.js   # ESLint flat config
postcss.config.js  # Mantido vazio (plugins: []) para evitar erros de resolução
```

## Estilos com Sass

Todos os utilitários que antes vinham do Tailwind foram substituídos por classes semânticas definidas em `src/index.scss`.
Exemplos de classes disponíveis:

- Layout: `container`, `section`, `section-hero`, `main-content`
- Header: `app-header`, `header-row`, `brand`, `spin-slow`
- Hero: `hero-grid`, `mockup-wrap`, `phone-mockup`, `phone-inner`, `notch`
- Download: `btns`, `btn`, `btn-primary`, `btn-disabled`, `heading-2`
- Tutorial: `grid-2`, `tutorial-step`, `icon-circle`, `video-box`, `video-overlay`
- Footer: `app-footer`, `text-sm`

Breakpoints usados (aprox. equivalentes ao sm/md/lg):

```scss
$sm: 640px; // sm
$md: 768px; // md
$lg: 1024px; // lg
```

As cores principais continuam centralizadas no objeto `colors` dentro do `App.jsx`. Se preferir, podemos movê-las para variáveis Sass (ex.: `$primary`, `$muted`, etc.) para evitar estilos inline. Posso fazer essa troca em seguida, se quiser.

## Nota sobre Tailwind removido

- Todas as dependências e diretivas do Tailwind foram removidas. O arquivo `postcss.config.js` permanece no repo apenas com `plugins: []` para o Vite não acusar erro ao procurar uma configuração.
- Se ainda houver um `tailwind.config.js` antigo no diretório, ele não é mais usado e pode ser apagado com segurança.

## Acessibilidade

- Ícones com propósito semântico e `aria-label` nos botões de download
- Contraste de cores revisado manualmente

Melhorias futuras sugeridas:

- Mover as cores para variáveis Sass e habilitar dark mode
- Adicionar testes de acessibilidade (axe-core) em CI
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

Se quiser que eu mova as cores para Sass e limpe arquivos legados automaticamente, é só pedir.
