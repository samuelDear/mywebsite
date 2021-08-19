import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Font } from './app/services/common';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export const fontLoader = (param: Font): void => {
  const headID = document.getElementsByTagName('head')[0];
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.id = 'link' + param.name;
  link.href = param.link;

  headID.appendChild(link);
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

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // eslint-disable-next-line no-console
  .catch(err => console.error(err));
