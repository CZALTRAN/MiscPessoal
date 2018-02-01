import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
@Injectable()
export class ServerService {
    constructor(private http: Http) { }
    storeService(servers: any[]) {
        // const headers = new Headers({'Content-Type':'application/json'});
        // return this.http.post('https://udemy-http-dummy.firebaseio.com/data.json',
        //  servers, {headers:headers}); 
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put('https://udemy-http-dummy.firebaseio.com/data.json',
            servers, { headers: headers });
    }

    getServers() {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get('https://udemy-http-dummy.firebaseio.com/data.json',
            { headers: headers }).map(
                (response:Response) =>{
                    const data = response.json();
                    return data;
                }
            ).catch(
                (error:Response)=>{
                    console.log(error);
                    return Observable.throw('Algo deu errado');
                }
            );
    }

    getAppName(){
        return this.http.get('https://udemy-http-dummy.firebaseio.com/AppName.json')
        .map((response:Response) => {return response.json()});
    }
}