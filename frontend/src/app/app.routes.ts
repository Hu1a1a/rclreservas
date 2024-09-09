import { Routes } from '@angular/router';
import { FrontMainComponent } from './page/front-main/front-main.component';
import { FrontServicioComponent } from './page/front-servicio/front-servicio.component';

export const routes: Routes = [
    { path: '', component: FrontMainComponent },
    { path: 'servicios/:servicio', component: FrontServicioComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
