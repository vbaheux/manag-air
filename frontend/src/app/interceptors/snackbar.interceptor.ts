import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackbarInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event) => {
        if (request.method == 'POST' || request.method == 'PUT')
          if (event instanceof HttpResponse && event.ok) {
            this.snackBar.open('Sauvegarde réussie.', 'Fermer', {
              duration: 2000,
              panelClass: 'successSnack',
            });
          }
      }),
      catchError((errorResponse: HttpErrorResponse) => {
        const errorMessage = `Erreur : ${this.getErrorMessage(errorResponse.error?.path, errorResponse.status)}`;
        this.snackBar.open(errorMessage, 'Fermer', {
          duration: 2000,
          panelClass: 'errorSnack',
        });
        throw errorResponse;
      }),
    );
  }

  private getErrorMessage(path: string, status: HttpStatusCode) {
    switch (path) {
      case '/vols':
        switch (status) {
          case HttpStatusCode.Conflict:
            return 'Un vol avec ce numéro de vol existe déjà.';
          case HttpStatusCode.BadRequest:
            return 'Certains champs du vol ne sont pas valides.';
          default:
            return "Une erreur est survenue lors de l'action pour ce vol.";
        }
      default:
        switch (status) {
          case HttpStatusCode.Conflict:
            return 'Un objet avec cet identifiant existe déjà.';
          case HttpStatusCode.BadRequest:
            return "Certains champs de l'objet ne sont pas valides.";
          default:
            return "Une erreur est survenue lors de l'action.";
        }
    }
  }
}
