import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayHideComponent } from './components/display-hide/display-hide.component';
import { ComponentCommunicationComponent } from './components/component-communication/component-communication.component';
import { CrudComponent } from './components/crud/crud.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayHideComponent,
    ComponentCommunicationComponent,
    CrudComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
