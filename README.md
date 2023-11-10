## Proyecto REACT utilizando VITE

- Creamos la carpeta Componentes y dentro de ella el fichero Api.jsx
- Borramos todo el contenido de App.jsx
  - Importamos el componente Api
  - Llamamos al componente Api, dentro del return, para que se renderice en el navegador.
- Borramos todo el contendio de App.css
  - formateamos pading y margin a 0
- En Api.jsx hacemos una llamada a la api de South-Park.
  - Utilizando fecht descargamos su contenido en un JSON
  - En el return recorremos el JSON con la función map y la mostramos en pantalla.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
