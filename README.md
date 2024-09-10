# JobListing

React Job Listing Website

<img width="481" alt="Screenshot 2024-09-10 at 11 55 19 AM" src="https://github.com/user-attachments/assets/eeef0604-fd05-4fcb-a468-56aa38bc27fa">

<img width="481" alt="Screenshot 2024-09-10 at 11 55 35 AM" src="https://github.com/user-attachments/assets/f0dd8793-e6bb-4ea6-8cd6-dd48167573b5">

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
# React Notes

- [ ] Virtual DOM - is a lightweight copy of actual DOM. (Document Object Model)

When state of a component changes, virtual Dom changes first and then react compares the virtual dom and actual dom and updates the parts that needs update.
              State => Compare => Re-render

- [ ] Hooks allow function components to have access to state and other React features such as lifecycle methods
- [ ] JSX - Javascript Syntax Extension - HTML inside javascript
- [ ] VITE - front end toolkit, fast development server build on top of ESBuild (ESBuild is a very fast JS Bundler) with hot reload.   npm create vite@latest job-listing

