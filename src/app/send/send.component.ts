import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-send',
  standalone: true,
  imports: [],
  templateUrl: './send.component.html',
  styleUrl: './send.component.css'
})
export class SendComponent {
  objFromChild:object={
    name : "Prithesh Salian",
    phone : "7090943866"
  };
  @Output() objectEvent = new EventEmitter<object>();
  sendObject(){
    this.objectEvent.emit(this.objFromChild);
  }
}
