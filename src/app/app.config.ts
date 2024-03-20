import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  //providers: [provideRouter(routes)]

  // crear un provider de manera global
  providers: [
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true,
        // onViewTransitionCreated(transitionInfo) {
        //   console.log(transitionInfo);
        // },
      })
    ),
    importProvidersFrom(HttpClientModule) // se importan todos los providers que se hacia antes de manera tradicional
  ],

  
};
