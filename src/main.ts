import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Font } from './app/services/common';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export const fontLoader = (param: Font): void => {
  // Validamos que no exista otra igual
  const divExist = document.getElementById(`link${param.name}`);
  if (!divExist) {
    const headID = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.id = `link${param.name}`;
    link.href = param.link;

    headID.appendChild(link);
  }
};

export const cleanFonts = (): void => {
  const links = document.getElementsByClassName('font-link');
  for (let i = links.length - 1; i >= 0; i--) {
    links[i].remove();
  }

  const styles = document.getElementsByClassName('font-style');
  for (let i = styles.length - 1; i >= 0; i--) {
    styles[i].remove();
  }
};

export const setProjectFont = (families: Font[]): void => {
  setTimeout(() => {
    families.forEach((element: Font, index: number) => {
      fontLoader(element);
      const div = document.getElementById(`typographyName${index + 1}`);
      const divExample = document.getElementById(`typographyExample${index + 1}`);
      if (div !== null && divExample !== null) {
        div.innerHTML = element.name;
        div.style.fontFamily = element.name;
        divExample.style.fontFamily = element.name;
      }
    });
  }, 100);
};

export const deleteTypo = (): void => {
  const links = document.getElementsByTagName('link');
  let isOkey = false;

  // Funcion para eliminar tipografias de proyectos
  do {
    isOkey = true;
    for (let i = 0; i < links.length; i++) {
      if (links[i].id != '') {
        //console.log(links[i]);
        isOkey = false;
        links[i].remove();
      }
    }
  } while (!isOkey);
};

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // eslint-disable-next-line no-console
  .catch(err => console.error(err));
