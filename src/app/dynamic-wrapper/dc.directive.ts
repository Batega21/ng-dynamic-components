import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dcWrapper]',
})
export class DcDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
