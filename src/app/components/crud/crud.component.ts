import { Component, OnInit, ViewChild } from '@angular/core';
import { FormComponent } from './form/form.component';
import { User } from './interfaces/user.interface';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  
  @ViewChild(FormComponent) formComponent!: FormComponent;

  dataUser(user: User){
    this.formComponent.myForm.patchValue(user);
  }

  constructor() { }

  ngOnInit(): void {

    
  }

}
