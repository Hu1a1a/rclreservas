import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { eventInterface } from '../../interface/event.interface';

@Component({
  selector: 'app-component-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class ComponentCardComponent {
  @Input() data!: eventInterface
}
