import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RecieveComponent } from './recieve/recieve.component';
import { SendComponent } from './send/send.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RecieveComponent, SendComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-3';
  obj: { name: string, phone: string } = { name: '', phone: '' };

  sendObject(){
    this.obj.name="Prithesh Salian",
    this.obj.phone="7090943866"
  }

  fromChildObject:{ name: string, phone: string } = { name: '', phone: '' };
  recieveObj($event:any){
    this.fromChildObject=$event;
  }
}
