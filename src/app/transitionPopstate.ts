export const navigationCustom = (goto: () => void): void => {
  startTx();
  setTimeout(() => {
    endTx();
    goto();
  }, 10);
};

export const startTx = (): void => {
  document.body.style.overflow = 'hidden';
  document.body.style.pointerEvents = 'none';
  const div = document.createElement('div');

  div.classList.add('loadScreen');
  div.classList.add('curtain');
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
    document.body.style.overflow = 'auto';
    document.body.style.pointerEvents = 'auto';
    if (waitScreen !== null) {
      document.body.removeChild(waitScreen);
    }
  }, 1200);
};
