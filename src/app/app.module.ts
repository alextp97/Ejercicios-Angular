import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayHideComponent } from './components/display-hide/display-hide.component';
import { ComponentCommunicationComponent } from './components/component-communication/component-communication.component';
import { CrudComponent } from './components/crud/crud.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ChildComponentComponent } from './components/component-communication/child-component/child-component.component';
import { CrudModule } from './components/crud/crud.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    DisplayHideComponent,
    ComponentCommunicationComponent,
    CrudComponent,
    NavbarComponent,
    ChildComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
