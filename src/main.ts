import {
  HttpInterceptorFn,
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { finalize } from 'rxjs';
import { AppComponent } from './app/app.component';
import { routes } from './app/routes';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    finalize(() => {
      console.log('Request', req);
    })
  );
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([loggingInterceptor, (req, next) => next(req)])
    )
  ],
});
