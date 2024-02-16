import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {

  constructor() { }

  getData(){
    return {
      name : "hadir",
      age : 23
    }
  }
}
