import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentCardGroupComponent } from '../../component/carousel-group/cardgroup.component';
import { eventInterface } from '../../interface/event.interface';
import { ServicioService } from '../../service/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-main',
  standalone: true,
  imports: [CommonModule, ComponentCardGroupComponent],
  templateUrl: './front-main.component.html',
  styleUrl: './front-main.component.css'
})
export class FrontMainComponent {
  constructor(public servicio: ServicioService, private router: Router) { }
  SeletecedType: any = this.servicio.Menu[0]
  SelectNav(item: any) {
    for (const i of this.servicio.Menu) i.Selected = false
    item.Selected = true
    this.SeletecedType = item
  }
  Buscar() { this.router.navigate(["servicios/" + this.SeletecedType.id]) }

  Evento: eventInterface[] = [
    { Name: "fdsfsafdsa1", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/piscina.jpeg" },
    { Name: "fdsfsafdsa2", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/piscina.jpeg" },
    { Name: "fdsfsafdsa3", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/piscina.jpeg" },
    { Name: "fdsfsafdsa4", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/piscina.jpeg" },
    { Name: "fdsfsafdsa5", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/piscina.jpeg" },
    { Name: "fdsfsafdsa6", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/piscina.jpeg" },
    { Name: "fdsfsafdsa7", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/piscina.jpeg" },
    { Name: "fdsfsafdsa8", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/piscina.jpeg" },
    { Name: "fdsfsafdsa9", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/piscina.jpeg" },
    { Name: "fdsfsafdsa10", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/piscina.jpeg" },
    { Name: "fdsfsafdsa11", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/piscina.jpeg" },
  ]

  Alquiler: eventInterface[] = [
    { Name: "fdsfsafdsa1", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/cabanya.jpeg" },
    { Name: "fdsfsafdsa2", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/cabanya.jpeg" },
    { Name: "fdsfsafdsa3", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/cabanya.jpeg" },
    { Name: "fdsfsafdsa4", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/cabanya.jpeg" },
    { Name: "fdsfsafdsa5", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/cabanya.jpeg" },
    { Name: "fdsfsafdsa6", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/cabanya.jpeg" },
    { Name: "fdsfsafdsa7", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/cabanya.jpeg" },
    { Name: "fdsfsafdsa8", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/cabanya.jpeg" },
    { Name: "fdsfsafdsa9", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/cabanya.jpeg" },
    { Name: "fdsfsafdsa10", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/cabanya.jpeg" },
    { Name: "fdsfsafdsa11", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/cabanya.jpeg" },
  ]


}
