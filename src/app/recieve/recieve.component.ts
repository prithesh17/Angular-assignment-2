import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recieve',
  standalone: true,
  imports: [],
  templateUrl: './recieve.component.html',
  styleUrl: './recieve.component.css'
})
export class RecieveComponent {
  @Input() objFromParent: { name: string, phone: string } = { name: '', phone: '' };
}
