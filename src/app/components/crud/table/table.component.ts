import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  listUsers: User[] = [];

  constructor( private crudService: CrudService) { }

  ngOnInit(): void {

    this.crudService.getUsers()
      .subscribe( users => this.listUsers = users );
  }

}
