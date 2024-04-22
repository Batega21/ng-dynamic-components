import { Injectable } from '@angular/core';
import { DynamicItem } from '../types/dynamic-item';
import { RustComponent } from '../components/rust/rust.component';
import { PythonComponent } from '../components/python/python.component';
import { JavascriptComponent } from '../components/javascript/javascript.component';

@Injectable({
  providedIn: 'root'
})
export class DcService {

  constructor() { }

  public getDynamicComponents() {
    const components = [
      new DynamicItem(RustComponent, { name: 'Rust', description: 'Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.' }),
      new DynamicItem(PythonComponent, { name: 'Python', description: 'Python is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.' }),
      new DynamicItem(JavascriptComponent, { name: 'Javascript', description: 'Javascript is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.' }),
    ];
    return components;
  }
}
