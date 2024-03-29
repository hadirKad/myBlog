import { Component } from '@angular/core';
import{LocalServiceService} from 'src/app/services/local-service.service';
import{CallApiServiceService} from 'src/app/services/call-api-service.service';
import{user} from'src/app/models/user'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  name = ""
  data :any
  
  dataType:user[] = [{
    name : "hadir",
    id : 1,
    userId : 12,
 }]

  constructor(private localService :LocalServiceService , private apiSevice : CallApiServiceService){
     console.warn(this.localService.getData())
     let data = this.localService.getData()
     this.name = data.name

     this.apiSevice.getDataFromUrl().subscribe(data=>{
        console.warn(data)
        this.data = data
     })
  }

}
