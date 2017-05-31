import logo from '../assets/logo.png';

export default function home() {
  let saludo = document.getElementById('saludo');
  let logoElement = document.createElement("img");
  logoElement.src = logo;
  saludo.appendChild(logoElement);
}
