import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StorageService } from '../services/storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private storageService: StorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if account is logged in and request is to the api url
        const tk = this.storageService.get("accessToken");
        const isLoggedIn = tk != null;
        //const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn) {
          //console.log("Aplica el token");
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${tk}` }
            });
            //console.log(request);
        }

        return next.handle(request);
    }
}