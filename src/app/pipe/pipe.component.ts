import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  name = "hadir kAdRi"
  today = Date.now()
  str = "hello angular"
  money = 100
}
