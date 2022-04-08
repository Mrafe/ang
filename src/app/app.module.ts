import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayNameComponent } from './display-name/display-name.component';
import { DisplayAgeComponent } from './display-age/display-age.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayNameComponent,
    DisplayAgeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
