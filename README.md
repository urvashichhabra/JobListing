# JobListing

React Job Listing Website

<img width="481" alt="Screenshot 2024-09-10 at 11 55 19 AM" src="https://github.com/user-attachments/assets/eeef0604-fd05-4fcb-a468-56aa38bc27fa">

<img width="481" alt="Screenshot 2024-09-10 at 11 55 35 AM" src="https://github.com/user-attachments/assets/f0dd8793-e6bb-4ea6-8cd6-dd48167573b5">

<img width="481" alt="Screenshot 2024-09-10 at 7 04 48 PM" src="https://github.com/user-attachments/assets/79951ea8-c694-4cd4-b2bd-111356bc47e5">

<img width="481" alt="Screenshot 2024-09-10 at 7 05 05 PM" src="https://github.com/user-attachments/assets/f8217377-0b96-4312-928c-5751138c6e33">


# Highlights

- react
- react-icons
- react-spinners
- react-toastify
- json-server (Mockend - Mock Backend with json file)
- vite
- formik
- typescript

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
- [ ] dependencies are required to run, devDependencies only to develop, e.g.: unit tests, CoffeeScript to JavaScript transpilation, minification, ...
- [ ] Call Stack: The call stack is where functions are executed in the order they’re called. In synchronous operations, each function is added to the stack and executed before moving to the next.
- [ ] Web APIs (in Browsers): Functions like setTimeout, HTTP requests, and event listeners are handled by Web APIs in the browser. When an asynchronous function like setTimeout is called, it is passed to these Web APIs, which manage the timing without blocking the main call stack.
- [ ] Callback Queue: Once the Web API has finished its job (like waiting for the timeout), it pushes the callback function (like the one in setTimeout) to the callback queue.
- [ ] Event Loop: The event loop continuously checks the call stack. If it’s empty, it pushes the functions from the callback queue onto the stack for execution. This is why the delayed message “Geek” is logged after other code has finished.
- [ ] The async function allows us to write promise-based code as if it were synchronous. This ensures that the execution thread is not blocked.
Promise Handling: Async functions always return a promise. If a value is returned that is not a promise, JavaScript automatically wraps it in a resolved promise.
- [ ] The await keyword is used to wait for a promise to resolve. It can only be used within an async block.
Execution Pause: Await makes the code wait until the promise returns a result, allowing for cleaner and more manageable asynchronous code.


