import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../service/servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentCardComponent } from '../../component/card-servicio/card.component';
import { eventInterface } from '../../interface/event.interface';

@Component({
  selector: 'app-front-servicio',
  standalone: true,
  imports: [CommonModule, ComponentCardComponent],
  templateUrl: './front-servicio.component.html',
  styleUrl: './front-servicio.component.css'
})
export class FrontServicioComponent implements OnInit {
  constructor(public servicio: ServicioService, private route: ActivatedRoute, private router: Router) { }
  id: string = ""
  menu!: any
  paginator: [number, number] = [0, 10]
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('servicio') || ""
    this.menu = this.servicio.Menu.find((a: any) => a.id === this.id)
    if (!this.menu) this.router.navigate(["main"])
    this.paginator = [this.Evento.length > 10 ? 10 : this.Evento.length, this.Evento.length]
  }
  paginar() {
    if (this.paginator[0] < this.paginator[1]) {
      this.paginator[0] = this.Evento.length > this.paginator[0] + 10 ? this.paginator[0] + 10 : this.Evento.length
    }
  }
  
  Evento: eventInterface[] = [
    { Name: "fdsfsafdsa1", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/team.png" },
    { Name: "fdsfsafdsa2", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/team.png" },
    { Name: "fdsfsafdsa3", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/team.png" },
    { Name: "fdsfsafdsa4", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/team.png" },
    { Name: "fdsfsafdsa5", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/team.png" },
    { Name: "fdsfsafdsa6", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/team.png" },
    { Name: "fdsfsafdsa7", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/team.png" },
    { Name: "fdsfsafdsa8", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/team.png" },
    { Name: "fdsfsafdsa9", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/team.png" },
    { Name: "fdsfsafdsa10", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/team.png" },
    { Name: "fdsfsafdsa11", Date: "sábado 27/04", Time: "4:00pm", id: 0, img: "assets/team.png" },
  ]
}
