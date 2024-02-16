import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'myBlog';
  textBoxValue = ""

   getName(name: any){
    return(name)
   }
   mouseOverFunc(){
    console.log('mouse over event');
   }
   mouseLeaveFunc(){
    console.log('mouse leave event');
   }
   getTextValue(val : any){
    console.log(val)
    this.textBoxValue = val 
   }
}
