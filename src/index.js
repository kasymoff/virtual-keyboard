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

const keyboardENlc = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', "Delete", 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '⮝', 'Shift', 'Ctrl', '⊞', 'Alt', ' ', 'Alt', '⮜', '⮟', '⮞', 'Ctrl'];
const keyboardENuc = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', "Delete", 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '⮝', 'Shift', 'Ctrl', '⊞', 'Alt', ' ', 'Alt', '⮜', '⮟', '⮞', 'Ctrl'];
const keyboardRUlc = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', "Delete", 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '⮝', 'Shift', 'Ctrl', '⊞', 'Alt', ' ', 'Alt', '⮜', '⮟', '⮞', 'Ctrl'];
const keyboardRUuc = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', "Delete", 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '⮝', 'Shift', 'Ctrl', '⊞', 'Alt', ' ', 'Alt', '⮜', '⮟', '⮞', 'Ctrl'];
const keyboardENlcWithShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', "Delete", 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '⮝', 'Shift', 'Ctrl', '⊞', 'Alt', ' ', 'Alt', '⮜', '⮟', '⮞', 'Ctrl'];
const keyboardENucWithShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', "Delete", 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '⮝', 'Shift', 'Ctrl', '⊞', 'Alt', ' ', 'Alt', '⮜', '⮟', '⮞', 'Ctrl'];
const keyboardRUlcWithShift = ['ё', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '|', "Delete", 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '⮝', 'Shift', 'Ctrl', '⊞', 'Alt', ' ', 'Alt', '⮜', '⮟', '⮞', 'Ctrl'];
const keyboardRUucWithShift = ['Ё', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '|', "Delete", 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '⮝', 'Shift', 'Ctrl', '⊞', 'Alt', ' ', 'Alt', '⮜', '⮟', '⮞', 'Ctrl'];

const codes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
let keysPressed = {};
let loadedLayout = localStorage.getItem('layout');
let prevLayout = '';
let inputStart;

function init(layout) {
  let out = '';
  for (let i = 0; i < layout.length;i++) {
    out += `<div class='key' id='${codes[i]}'>${layout[i]}</div>`
  }
  prevLayout = loadedLayout;
  loadedLayout = layout[15];
  document.querySelector('#keyboard-keys').innerHTML = out;
}

if (loadedLayout === 'й') {
  init(keyboardRUlc);
} else if (loadedLayout === 'Й') {
  init(keyboardRUuc);
} else if (loadedLayout === 'Q') {
  init(keyboardENuc);
} else {
  init(keyboardENlc)
}

localStorage.setItem('layout', loadedLayout);

document.querySelector('#text-area').oninput = (event) => {
  
}

document.onkeydown = (event) => {
  inputStart = document.querySelector('#text-area').selectionStart;
  keysPressed[event.code] = true;
  if (event.code === "Tab" || event.code === "MetaLeft" || event.code === "AltLeft" || event.code === "AltRight" || event.code === "ShiftLeft" || event.code === "ShiftRight") {
    event.preventDefault();
  }
  if (keysPressed['AltLeft'] && event.code === 'ShiftLeft' || keysPressed['AltLeft'] && event.code === 'ShiftRight' || keysPressed['AltRight'] && event.code === 'ShiftRight' || keysPressed['AltRight'] && event.code === 'ShiftLeft') {
    if (loadedLayout === 'q') {  
      init(keyboardRUlc);
      localStorage.setItem('layout', loadedLayout)
    } else if (loadedLayout === 'Q') {
      init(keyboardRUuc);
      localStorage.setItem('layout', loadedLayout)
    } else if (loadedLayout === 'Й') {
      init(keyboardENuc);
      localStorage.setItem('layout', loadedLayout)
    } else if (loadedLayout === 'й'){
      init(keyboardENlc);
      localStorage.setItem('layout', loadedLayout)
    }
  } else if (event.code === 'CapsLock') {
    if (loadedLayout === 'q') {
      init(keyboardENuc);
      localStorage.setItem('layout', loadedLayout)
      document.querySelector('#CapsLock').classList.add('active');
    } else if (loadedLayout === 'Q') {
      init(keyboardENlc);
      localStorage.setItem('layout', loadedLayout)
      document.querySelector('#CapsLock').classList.remove('active');
    } else if (loadedLayout === 'й') {
      init(keyboardRUuc);
      localStorage.setItem('layout', loadedLayout)
      document.querySelector('#CapsLock').classList.add('active');
    } else if (loadedLayout === 'Й') {
      init(keyboardRUlc);
      localStorage.setItem('layout', loadedLayout)
      document.querySelector('#CapsLock').classList.remove('active');
    }
  } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (loadedLayout === 'q') {
      init(keyboardENucWithShift);
    } else if (loadedLayout === 'Q') {
      init(keyboardENlcWithShift);
    } else if (loadedLayout === 'й') {
      init(keyboardRUucWithShift);
    } else if (loadedLayout === 'Й') {
      init(keyboardRUlcWithShift);
    }
    document.querySelector(`#${event.code}`).classList.add('active');
  } else {
    if (event.code !== 'Backspace' && event.code !== 'Tab' && event.code !== 'Delete' && event.code !== 'CapsLock' 
    && event.code !== 'Enter' && event.code !== 'ShiftLeft' && event.code !== 'ShiftRight' && event.code !== 'ControlLeft' 
    && event.code !== 'ControlRight' && event.code !== 'AltLeft' && event.code !== 'AltRight' && event.code !== 'MetaLeft') {
      event.preventDefault();
      const val = document.querySelector(`#${event.code}`).textContent;
      let arr = document.querySelector('#text-area').value.split('');
      arr.splice(inputStart, 0, val);
      document.querySelector('#text-area').value = arr.join('');
      inputStart++;
      document.querySelector('#text-area').setSelectionRange(inputStart, inputStart);
    } else if (event.code === 'Backspace') {
      event.preventDefault();
      if (inputStart > 0) {
        let arr = document.querySelector('#text-area').value.split('');
        arr.splice(inputStart - 1, 1);
        document.querySelector('#text-area').value = arr.join('');
        inputStart--;
      }
      document.querySelector('#text-area').setSelectionRange(inputStart, inputStart);
    } else if (event.code === 'Tab') {
      event.preventDefault();
      const val = '\t';
      let arr = document.querySelector('#text-area').value.split('');
      arr.splice(inputStart, 0, val);
      document.querySelector('#text-area').value = arr.join('');
      inputStart++;
      document.querySelector('#text-area').setSelectionRange(inputStart, inputStart);
    } else if (event.code === 'Enter') {
      event.preventDefault();
      const val = '\n';
      let arr = document.querySelector('#text-area').value.split('');
      arr.splice(inputStart, 0, val);
      document.querySelector('#text-area').value = arr.join('');
      inputStart++;
      document.querySelector('#text-area').setSelectionRange(inputStart, inputStart);
    } else if (event.code === 'Delete') {
      event.preventDefault();
      let arr = document.querySelector('#text-area').value.split('');
      arr.splice(inputStart, 1);
      document.querySelector('#text-area').value = arr.join('');
      document.querySelector('#text-area').setSelectionRange(inputStart, inputStart);
    }
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
        localStorage.setItem('layout', loadedLayout)
      } else {
        init(keyboardENuc);
        localStorage.setItem('layout', loadedLayout)
      } 
    } else if (loadedLayout === 'Й') {
      if (prevLayout === 'й') {
        init(keyboardRUlc);
        localStorage.setItem('layout', loadedLayout)
      } else {
        init(keyboardRUuc);
        localStorage.setItem('layout', loadedLayout)
      }
    }
    document.querySelector(`#${event.code}`).classList.remove('active');
  } else {
    document.querySelector(`#${event.code}`).classList.remove('active');
  }
}

document.querySelector('#keyboard-keys').onmousedown = (event) => {
  inputStart = document.querySelector('#text-area').selectionStart;
  if (event.target.classList.contains("key")) {
    document.querySelector(`#${event.target.id}`).classList.add('active');
    if (event.target.id !== 'Backspace' && event.target.id !== 'Tab' && event.target.id !== 'Delete' && event.target.id !== 'CapsLock' 
    && event.target.id !== 'Enter' && event.target.id !== 'ShiftLeft' && event.target.id !== 'ShiftRight' && event.target.id !== 'ControlLeft' 
    && event.target.id !== 'ControlRight' && event.target.id !== 'AltLeft' && event.target.id !== 'AltRight' && event.target.id !== 'MetaLeft') {
      event.preventDefault();
      const val = document.querySelector(`#${event.target.id}`).textContent;
      let arr = document.querySelector('#text-area').value.split('');
      arr.splice(inputStart, 0, val);
      document.querySelector('#text-area').value = arr.join('');
      inputStart++;
      document.querySelector('#text-area').setSelectionRange(inputStart, inputStart);
    } else if (event.target.id === 'Backspace') {
      event.preventDefault();
      if (inputStart > 0) {
        let arr = document.querySelector('#text-area').value.split('');
        arr.splice(inputStart - 1, 1);
        document.querySelector('#text-area').value = arr.join('');
        inputStart--;
      }
      document.querySelector('#text-area').setSelectionRange(inputStart, inputStart);
    } else if (event.target.id === 'Tab') {
      event.preventDefault();
      const val = '\t';
      let arr = document.querySelector('#text-area').value.split('');
      arr.splice(inputStart, 0, val);
      document.querySelector('#text-area').value = arr.join('');
      inputStart++;
      document.querySelector('#text-area').setSelectionRange(inputStart, inputStart);
    } else if (event.target.id === 'Enter') {
      event.preventDefault();
      const val = '\n';
      let arr = document.querySelector('#text-area').value.split('');
      arr.splice(inputStart, 0, val);
      document.querySelector('#text-area').value = arr.join('');
      inputStart++;
      document.querySelector('#text-area').setSelectionRange(inputStart, inputStart);
    } else if (event.target.id === 'Delete') {
      event.preventDefault();
      let arr = document.querySelector('#text-area').value.split('');
      arr.splice(inputStart, 1);
      document.querySelector('#text-area').value = arr.join('');
      document.querySelector('#text-area').setSelectionRange(inputStart, inputStart);
    } else if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {
      if (loadedLayout === 'q') {
        init(keyboardENucWithShift);
      } else if (loadedLayout === 'Q') {
        init(keyboardENlcWithShift);
      } else if (loadedLayout === 'й') {
        init(keyboardRUucWithShift);
      } else if (loadedLayout === 'Й') {
        init(keyboardRUlcWithShift);
      }
    } else if (event.target.id === 'CapsLock') {
      document.querySelector(`#${event.target.id}`).classList.toggle('active');
      if (loadedLayout === 'q') {
        init(keyboardENuc);
        localStorage.setItem('layout', loadedLayout)
        document.querySelector('#CapsLock').classList.add('active');
      } else if (loadedLayout === 'Q') {
        init(keyboardENlc);
        localStorage.setItem('layout', loadedLayout)
        document.querySelector('#CapsLock').classList.remove('active');
      } else if (loadedLayout === 'й') {
        init(keyboardRUuc);
        localStorage.setItem('layout', loadedLayout)
        document.querySelector('#CapsLock').classList.add('active');
      } else if (loadedLayout === 'Й') {
        init(keyboardRUlc);
        localStorage.setItem('layout', loadedLayout)
        document.querySelector('#CapsLock').classList.remove('active');
      }
    }
  }
}

document.querySelector('#keyboard-keys').onmouseup = (event) => {
  document.querySelector(`#${event.target.id}`).classList.remove('active');
  if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {
    if (loadedLayout === 'Q') {
      if (prevLayout === 'q') {
        init(keyboardENlc);
        localStorage.setItem('layout', loadedLayout)
      } else {
        init(keyboardENuc);
        localStorage.setItem('layout', loadedLayout)
      } 
    } else if (loadedLayout === 'Й') {
      if (prevLayout === 'й') {
        init(keyboardRUlc);
        localStorage.setItem('layout', loadedLayout)
      } else {
        init(keyboardRUuc);
        localStorage.setItem('layout', loadedLayout)
      }
    }
  }
}

document.querySelector('#keyboard-keys').onmouseout = (event) => {
  document.querySelector(`#${event.target.id}`).classList.remove('active');
  if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {
    if (loadedLayout === 'Q') {
      if (prevLayout === 'q') {
        init(keyboardENlc);
        localStorage.setItem('layout', loadedLayout)
      } else {
        init(keyboardENuc);
        localStorage.setItem('layout', loadedLayout)
      } 
    } else if (loadedLayout === 'Й') {
      if (prevLayout === 'й') {
        init(keyboardRUlc);
        localStorage.setItem('layout', loadedLayout)
      } else {
        init(keyboardRUuc);
        localStorage.setItem('layout', loadedLayout)
      }
    }
  }
}
