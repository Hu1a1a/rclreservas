import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontFooterComponent } from './layout/front-footer/footer.component';
import { FrontHeadComponent } from './layout/front-head/head.component';
import { PanelFooterComponent } from './layout/panel-footer/footer.component';
import { PanelHeadComponent } from './layout/panel-head/head.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrontFooterComponent, FrontHeadComponent, PanelFooterComponent, PanelHeadComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
