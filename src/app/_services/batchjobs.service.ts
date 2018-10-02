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

   // sample get call in working condition
   sample() {
		return this.http.get('https://jsonplaceholder.typicode.com/users').map(data =>{
      return data;
    })
	};

}
