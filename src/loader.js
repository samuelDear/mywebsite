const loadScreen = () => {
  document.body.style.overflow = 'hidden';
  document.body.style.pointerEvents = 'none';
  const div = document.createElement('div');
  const name = document.createElement('p');
  const hr = document.createElement('div');

  div.classList.add('loadScreenInitial');
  div.classList.add('loadScreen');
  div.classList.add('curtain');
  div.setAttribute('id', 'waitScreen');

  name.innerHTML = 'Samuel Rojas';
  name.classList.add('name');

  hr.classList.add('loadingLine');

  div.appendChild(name);
  div.appendChild(hr);

  document.body.appendChild(div);
};

const endLoadScreen = () => {
  const waitScreen = document.getElementById('waitScreen');
  waitScreen.style.opacity = 0;
  setTimeout(() => {
    document.body.style.overflow = 'auto';
    document.body.style.pointerEvents = 'auto';
    document.body.removeChild(waitScreen);
  }, 1000);
};
loadScreen();
window.onload = () => {
  endLoadScreen();
};
