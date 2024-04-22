import { Component, Input, ViewChild } from '@angular/core';
import { DynamicItem } from '../types/dynamic-item';
import { CommonModule } from '@angular/common';
import { DcDirective } from './dc.directive';
import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'app-dynamic-wrapper',
  templateUrl: './dynamic-wrapper.component.html',
  styleUrls: ['./dynamic-wrapper.component.scss']
})
export class DynamicWrapperComponent {
  @Input() dynamicComponents: DynamicItem[] = [];
  @ViewChild(DcDirective) dcWrapper!: DcDirective;

  public loadComponent(item: DynamicItem) {
    const viewContainerRef = this.dcWrapper.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DynamicComponent>(
      item.component
    );
    componentRef.instance.data = item.data;
  }
}
