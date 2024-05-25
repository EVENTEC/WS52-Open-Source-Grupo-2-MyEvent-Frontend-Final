import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {HttpClient, provideHttpClient,withFetch} from "@angular/common/http";
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch()),provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync()],
};
