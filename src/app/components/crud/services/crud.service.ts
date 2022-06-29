import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private http: HttpClient ) { }

  //Obtengo todos los usuarios
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users')
  }
}
