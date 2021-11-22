export const navigationCustom = (goto: () => void): void => {
  startTx();
  setTimeout(() => {
    endTx();
    goto();
  }, 2500);
};

export const startTx = (): void => {
  document.body.style.overflow = 'hidden';
  document.body.style.pointerEvents = 'none';
  const div = document.createElement('div');
  const name = document.createElement('p');
  const hr = document.createElement('div');

  div.classList.add('loadScreen');
  div.classList.add('curtain');
  div.style.backgroundImage = "url('assets/images/pat-dark.webp')";
  div.setAttribute('id', 'waitScreen');

  name.innerHTML = 'Samuel Rojas';
  name.classList.add('name');

  hr.classList.add('loadingLine');

  div.appendChild(name);
  div.appendChild(hr);

  document.body.appendChild(div);
  div.style.width = '0%';
  setTimeout(() => {
    const waitScreen: HTMLElement = <HTMLElement>document.getElementById('waitScreen');
    waitScreen.style.width = '100%';
  }, 2);
};

export const endTx = (): void => {
  const waitScreen: HTMLElement = <HTMLElement>document.getElementById('waitScreen');
  waitScreen.style.width = '0%';
  setTimeout(() => {
    document.body.style.overflow = 'auto';
    document.body.style.pointerEvents = 'auto';
    document.body.removeChild(waitScreen);
  }, 1800);
};
