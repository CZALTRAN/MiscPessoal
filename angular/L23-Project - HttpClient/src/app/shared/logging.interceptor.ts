import { HttpInterceptor } from "@angular/common/http/src/interceptor";
import { HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';

export class LoggingInteceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable< HttpEvent<any>> {
        return next.handle(req).do(
            evnet=>{
                console.log('logging interceptor:', event)
            }
        );
    }
    
}