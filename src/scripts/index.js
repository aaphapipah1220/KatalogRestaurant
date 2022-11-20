import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/drawer.css';
import '../styles/detail.css';
import App from './views/app';
import swRegister from './utils/swRegister';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
