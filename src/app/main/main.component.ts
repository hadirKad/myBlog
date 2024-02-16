import { Component } from '@angular/core';
import{LocalServiceService} from 'src/app/services/local-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  name = ""
  constructor(private localService :LocalServiceService){
     console.warn(this.localService.getData())
     let data = this.localService.getData()
     this.name = data.name
  }

}
