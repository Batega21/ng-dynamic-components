import { Type } from "@angular/core";

export class DynamicItem {
  // TODO: Generate component and data Types
  constructor(public component: Type<any>, public data: any) {}
}
