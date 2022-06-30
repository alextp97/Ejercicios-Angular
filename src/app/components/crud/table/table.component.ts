import { Component, OnInit } from '@angular/core';
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

  eliminateUser(user: User){

    //console.log(user.id);
    this.crudService.deleteUser(user.id).subscribe(() => this.ngOnInit());
  }

}
