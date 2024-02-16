import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallApiServiceService {

  constructor(private http:HttpClient) {}

  getDataFromUrl(){
    let url = "https://jsonplaceholder.typicode.com/todos/";
    return this.http.get(url);
  }
}
