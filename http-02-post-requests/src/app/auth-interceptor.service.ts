import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('logged in auth interceptor');
    const modifiedReq = req.clone({
      headers: req.headers.append('from-interceptor', 'auth'),
    });
    return next.handle(modifiedReq);
  }
}
