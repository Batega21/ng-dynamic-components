import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rust',
  template: `<h1>This is {{ data?.name }} component</h1>
    <h2>Description: {{ data?.description }}</h2>`
})
export class RustComponent {
  @Input() data: any;
}
