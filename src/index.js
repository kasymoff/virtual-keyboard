import "./style.scss";

function component(component) {
  const element = document.createElement(component);

  element.innerHTML = ""

  return element;
}

document.body.appendChild(component('label'));