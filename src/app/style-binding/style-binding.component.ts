import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent {
   
  color = "blue"
  err = false;

  updateColor(){
    this.color = "purple"
  }

  updateErr(){
    this.err = !this.err
  }

}
