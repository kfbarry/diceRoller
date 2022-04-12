import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { D20Component } from './d20/d20.component';
import { D12Component } from './d12/d12.component';
import { D10Component } from './d10/d10.component';
import { D8Component } from './d8/d8.component';
import { D6Component } from './d6/d6.component';
import { D4Component } from './d4/d4.component';
import { D100Component } from './d100/d100.component';

@NgModule({
  declarations: [
    AppComponent,
    D20Component,
    D12Component,
    D10Component,
    D8Component,
    D6Component,
    D4Component,
    D100Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
