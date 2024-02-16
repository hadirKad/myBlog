import { Component , Input , Output , OnInit , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  //input is info we get from parent
  @Input() userName: any;
  @Input() objData: any;
   
  //output is funct that will send data from child to parent
  @Output() parentFunction :EventEmitter<any> = new EventEmitter;

  ngOnInit() :void{
    let data = [
      {name : "hadir" , age : "25"},
      {name : "bruce" , age : "38"}  ]

    this.parentFunction.emit(data[1].name)  
  }

  getData(){
    this.parentFunction.emit("hadir")
  }
}
