import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent {
   
  getValues(val : any){
    //you can see the result in the console
    console.warn(val)
  }
}
