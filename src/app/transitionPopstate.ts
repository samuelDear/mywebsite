export const navigationCustom = (goto: () => void): void => {
  startTx();
  setTimeout(() => {
    endTx();
    goto();
  }, 10);
};

export const startTx = (): void => {
  const body = document.body;
  body.style.overflow = 'hidden';
  body.style.pointerEvents = 'none';
  const div = document.createElement('div');

  div.classList.add('loadScreen', 'curtain');
  div.style.backgroundImage = '';
  div.style.backgroundColor = '#000';
  div.style.opacity = '1';
  div.setAttribute('id', 'waitScreen');

  const waitScreen: HTMLElement = <HTMLElement>document.getElementById('waitScreen');
  if (waitScreen !== null) {
    waitScreen.style.width = '100%';
  }
};

export const endTx = (): void => {
  const waitScreen: HTMLElement = <HTMLElement>document.getElementById('waitScreen');
  if (waitScreen !== null) {
    waitScreen.style.width = '0%';
  }
  setTimeout(() => {
    const body = document.body;
    body.style.overflow = 'auto';
    body.style.pointerEvents = 'auto';
    if (waitScreen !== null) {
      body.removeChild(waitScreen);
    }
  }, 1200);
};
