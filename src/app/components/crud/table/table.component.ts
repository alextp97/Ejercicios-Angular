import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { CrudService } from '../services/crud.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  @Output() modUser = new EventEmitter<User>();


  clickEvent: Subscription;
  listUsers: User[] = [];

  constructor( private crudService: CrudService,
               private sharedService: SharedService) {

                this.clickEvent = this.sharedService.getUserEvent()
                .subscribe(() => this.ngOnInit());
                
  }

  ngOnInit(): void {

    this.crudService.getUsers()
      .subscribe( users => this.listUsers = users );
      
  }


  //Método para modificar el usuario
  modifyUser(id: number){
    console.log(this.crudService.getPersonById(id)
    .subscribe((data) => {
      this.modUser.emit(data)
    }));
     

  }

  //Método para eliminar el usuario
  eliminateUser(user: User){

    //console.log(user.id);
    this.crudService.deleteUser(user.id).subscribe(() => this.ngOnInit());
  }

}
