import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class BatchjobsService {

  constructor(private http: HttpClient) { }

  getBatchjobs(arg1val: string, arg2val: string) {

    return this.http.post<any>('/spl/batchjobs', { arg1: arg1val, arg2: arg2val }).map(data => {
      return data;
    });
  }

  //method2
   method2(arg1: string) {
    // method definition
   }

login() {
    return this.http.post("/spl/j_security_check?j_username=VIJAYJAI&j_password=APFG9bPB",{headers:this.getHeaders()}).map(data => {
      return data;
    });
  }

getAuthToken() {
  return this.http.get('/spl/restSecurityToken',{headers:this.getHeaders()}).map(data =>{
    return data;
  })
};    


private getHeaders() {
  // I included these headers because otherwise FireFox
  // will request text/html instead of application/json
  let headers = new HttpHeaders()
  headers.append('Accept', 'application/json')
  return headers
}


   // sample get call in working condition
   sample() {
		return this.http.get('https://jsonplaceholder.typicode.com/users').map(data =>{
      return data;
    })
	};

}
