const loadScreen = () => {
  const body = document.body;
  body.style.overflow = 'hidden';
  body.style.pointerEvents = 'none';
  const div = document.createElement('div');
  const name = document.createElement('p');
  const hr = document.createElement('div');

  div.classList.add('loadScreenInitial', 'loadScreen', 'curtain');
  div.setAttribute('id', 'waitScreen');

  name.innerHTML = 'Samuel Rojas';
  name.classList.add('name');

  hr.classList.add('loadingLine');

  div.append(name, hr);

  body.appendChild(div);
};

const endLoadScreen = () => {
  const body = document.body;
  const waitScreen = document.getElementById('waitScreen');
  waitScreen.style.opacity = 0;
  setTimeout(() => {
    body.style.overflow = 'auto';
    body.style.pointerEvents = 'auto';
    body.removeChild(waitScreen);
  }, 1000);
};

loadScreen();
window.onload = () => {
  endLoadScreen();
};
