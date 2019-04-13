import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routes';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent, ProductComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
