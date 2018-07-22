import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MyCustomValidatorComponent} from './my-custom-validator.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule , ReactiveFormsModule],
  declarations: [ AppComponent, MyCustomValidatorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
