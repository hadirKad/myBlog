import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  name = "hadir"
  data = [
    {
      name : "hadir",
      age : '23'
    },
    {
      name : "burce",
      age : '40'
    },
  ]

  val = ""
  parentFunction(val : any){
    console.warn(val)
    this.val = val 
  }
}
