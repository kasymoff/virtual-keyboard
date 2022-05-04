import "./style.scss";

function component(component, id, options) {
  const element = document.createElement(component, options);

  element.setAttribute("id", id);
  
  return element;
}

document.body.appendChild(component('h1', 'title'));
document.querySelector('#title').textContent = "Virtual Keyboard";
document.body.appendChild(component('textarea', "text-area"));
document.body.appendChild(component('div', "keyboard"));
document.querySelector("#keyboard").appendChild(component('div', "keyboard-keys"));

const keyboardENlc = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', "Delete", 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '⮝', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', '⮜', '⮟', '⮞', 'Control'];
const keyboardENuc = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', "Delete", 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '⮝', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', '⮜', '⮟', '⮞', 'Control'];
const keyboardRUlc = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', "Delete", 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '⮝', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', '⮜', '⮟', '⮞', 'Control'];
const keyboardRUuc = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', "Delete", 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '⮝', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', '⮜', '⮟', '⮞', 'Control'];
const keyboardENlcWithShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', "Delete", 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '⮝', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', '⮜', '⮟', '⮞', 'Control'];
const keyboardENucWithShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', "Delete", 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '⮝', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', '⮜', '⮟', '⮞', 'Control'];
const keyboardRUlcWithShift = ['ё', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '|', "Delete", 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '⮝', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', '⮜', '⮟', '⮞', 'Control'];
const keyboardRUucWithShift = ['Ё', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '|', "Delete", 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '⮝', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', '⮜', '⮟', '⮞', 'Control'];

const codes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
let keysPressed = {};
let loadedLayout = '';
let prevLayout = '';

function init(layout) {
  let out = '';
  for (let i = 0; i < layout.length;i++) {
    out += `<div class='key' id='${codes[i]}'>${layout[i]}</div>`
  }
  prevLayout = loadedLayout;
  loadedLayout = layout[15];
  console.log(loadedLayout);
  document.querySelector('#keyboard-keys').innerHTML = out;
}

init(keyboardENlc);

document.onkeydown = (event) => {
  event.preventDefault();
  keysPressed[event.code] = true;
  if (keysPressed['AltLeft'] && event.code === 'ShiftLeft' || keysPressed['AltLeft'] && event.code === 'ShiftRight' || keysPressed['AltRight'] && event.code === 'ShiftRight' || keysPressed['AltRight'] && event.code === 'ShiftLeft') {
    if (loadedLayout === 'q') {  
      init(keyboardRUlc);
    } else if (loadedLayout === 'Q') {
      init(keyboardRUuc);
    } else if (loadedLayout === 'Й') {
      init(keyboardENuc);
    } else if (loadedLayout === 'й'){
      init(keyboardENlc);
    }
  } else if (event.code === 'CapsLock') {
    if (loadedLayout === 'q') {
      init(keyboardENuc);
      document.querySelector('#CapsLock').classList.add('active');
    } else if (loadedLayout === 'Q') {
      init(keyboardENlc);
      document.querySelector('#CapsLock').classList.remove('active');
    } else if (loadedLayout === 'й') {
      init(keyboardRUuc);
      document.querySelector('#CapsLock').classList.add('active');
    } else if (loadedLayout === 'Й') {
      init(keyboardRUlc);
      document.querySelector('#CapsLock').classList.remove('active');
    }
  } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (loadedLayout === 'q') {
      init(keyboardENucWithShift);
    } else if (loadedLayout === 'Q') {
      init(keyboardENlcWithShift);
    } else if (loadedLayout === 'й') {
      init(keyboardRUucWithShift)
    } else if (loadedLayout === 'Й') {
      init(keyboardRUlcWithShift)
    }
    document.querySelector(`#${event.code}`).classList.add('active');
  } else {
    document.querySelector(`#${event.code}`).classList.add('active');
  }
}

document.onkeyup = (event) => {
  delete keysPressed[event.code];
  if (event.code === "CapsLock") {
    null;
  } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (loadedLayout === 'Q') {
      if (prevLayout === 'q') {
        init(keyboardENlc);
      } else {
        init(keyboardENuc);
      } 
    } else if (loadedLayout === 'Й') {
      if (prevLayout === 'й') {
        init(keyboardRUlc);
      } else {
        init(keyboardRUuc);
      }
    }
    document.querySelector(`#${event.code}`).classList.remove('active');
  } else {
    document.querySelector(`#${event.code}`).classList.remove('active');
  }
}