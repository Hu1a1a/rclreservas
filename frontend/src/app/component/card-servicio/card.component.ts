import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { eventInterface } from '../../interface/event.interface';

@Component({
  selector: 'app-component-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class ComponentCardComponent {
  @Input() data!: eventInterface
  @Output() click = new EventEmitter()
}
