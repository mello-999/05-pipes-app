import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import localeES from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeES,'es');
registerLocaleData(localeES,'fr');



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),

     {
      provide: LOCALE_ID,
      useValue: 'fr',  
     },

    ],

};
