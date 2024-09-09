import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-front-head',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class FrontHeadComponent {
  constructor(public menu: MenuService) { }
}
