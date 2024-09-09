import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ComponentCardComponent } from '../carousel/card.component';
import { eventInterface } from '../../interface/event.interface';

@Component({
  selector: 'app-component-carouselgroup',
  standalone: true,
  imports: [CommonModule, ComponentCardComponent],
  templateUrl: './cardgroup.component.html',
  styleUrl: './cardgroup.component.css'
})
export class ComponentCardGroupComponent implements OnInit {
  @Input() data!: eventInterface[]
  @Input() id: string = "card"
  screen_width: number = innerWidth
  unit: any = Array(Math.floor(this.screen_width * 0.95 / 320))
  ngOnInit(): void {
    addEventListener("resize", () => {
      this.screen_width = innerWidth;
      this.unit = Array(Math.floor(this.screen_width * 0.95 / 320))
    })
  }
  prev() {
    const data = this.data.shift()
    if (data) {
      const x: eventInterface[] = []
      x.push(...this.data, data)
      this.data = x
    }
  }

  next() {
    const data = this.data.pop()
    if (data) {
      const x: eventInterface[] = []
      x.push(data, ...this.data)
      this.data = x
    }
  }
}