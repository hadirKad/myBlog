import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent {

    data = ['anil','sam' , 'peter' , 'bruce']
    objData = [
      {
        name : 'anil',
        age : '25'
      },
      {
        name : 'sam',
        age : '30'
      },{
        name : 'kelly',
        age : '20'
      },
    ]
}
