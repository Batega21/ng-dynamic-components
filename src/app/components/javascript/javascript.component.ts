import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../../dynamic-wrapper/dynamic.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-javascript',
  template: `<h1>This is {{ data?.name }} component</h1>
    <h2>Description: {{ data?.description }}</h2>`
})
export class JavascriptComponent implements DynamicComponent {
  @Input() data: any;
}
