import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentCommunicationComponent } from './components/component-communication/component-communication.component';
import { CrudComponent } from './components/crud/crud.component';
import { DisplayHideComponent } from './components/display-hide/display-hide.component';

const routes: Routes = [
  {
    path: 'displayHide',
    component: DisplayHideComponent
  },
  {
    path: 'componentCommunication',
    component: ComponentCommunicationComponent
  },
  {
    path: 'crud',
    component: CrudComponent
  },
  {
    path: '**',
    redirectTo: 'displayHide'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
