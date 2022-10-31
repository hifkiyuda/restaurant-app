import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './views/components/app-bar';
import App from './views/App';

// // hamburger
const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('#mainContent');

const app = new App({
  button: hamburgerButtonElement,
  drawer: drawerElement,
  content: mainElement,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
