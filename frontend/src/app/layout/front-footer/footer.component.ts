import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-front-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FrontFooterComponent {
  constructor(public menu: MenuService) { }
}
