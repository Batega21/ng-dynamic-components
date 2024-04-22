import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RustComponent } from './components/rust/rust.component';
import { PythonComponent } from './components/python/python.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { DynamicWrapperComponent } from './dynamic-wrapper/dynamic-wrapper.component';
import { DcDirective } from './dynamic-wrapper/dc.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    RustComponent,
    PythonComponent,
    JavascriptComponent,
    DynamicWrapperComponent,
    DcDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
