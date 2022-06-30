import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentCommunicationComponent } from './components/component-communication/component-communication.component';
import { CrudComponent } from './components/crud/crud.component';
import { ChildComponentComponent } from './components/component-communication/child-component/child-component.component';
import { DisplayHideComponent } from './components/display-hide/display-hide.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CrudModule } from './components/crud/crud.module';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';





@NgModule({
  declarations: [
    AppComponent,
    ComponentCommunicationComponent,
    CrudComponent,
    ChildComponentComponent,
    DisplayHideComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CrudModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
