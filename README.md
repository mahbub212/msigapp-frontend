# MSIG front-end Application 

This code explain using CRUD with java spring boot as backend and react.js as frontend.

# Setup Instruction
1. Install Node.js the latest
2. Install Visual Studio Code the latest
3. Install MySQL

# Create React.js Project
Running if you using Windows OS
1. C:\npm create vite@latest msigapp-frontend
   Select a framework:
   >React
   Select a variant:
   JavaScript

2. To Install packages 
   C:\>cd msigapp-frontend
   C:\>npm install

3. Running application             
   C:\>npm run dev

4. Install React.js dependencies
   Go to Terminal in your Visual Studio Code
   C:\>npm install bootstrap --save
   C:\>npm install axios --save
   C:\>npm install react-router-dom --save

5. You can change default port
   Edit file vite.config.js   
   export default defineConfig({
   plugins: [react()],
   server : {
     port :3000
   }
   })


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
