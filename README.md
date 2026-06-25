# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Maintenance Steps:
  1. Open the project
  cd ~/Desktop/RyanStuff/projects/ryansiebertcodes-github-io

  2. Start the dev server
  npm run dev
  Then open http://localhost:5173/ in your browser. Changes hot-reload instantly.

  3. Make your changes
  Everything lives in one file: src/App.jsx
  - Edit content → update the projects or skills arrays at the top
  - Edit layout/copy → find the relevant section ({/* Hero */}, {/* About */}, etc.)

  4. Preview & verify
  The browser at http://localhost:5173/ reflects every save live.

  5. Publish
  npm run deploy
  This builds the site and pushes it to GitHub Pages. Live at https://ryansiebertcodes.github.io within ~1-2 minutes.

  6. Stop the dev server
  Ctrl+C in the terminal when done.

  7. Push changes to git


  ---
  That's the whole loop. The only file you'll ever touch for content or layout is src/App.jsx. The npm run deploy command handles build + publish in
  one step.
