import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  //Obtengo todos los usuarios
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`);
  }


  //Enviar el usuario creado a la base de datos
  newUser( user: User): Observable<User>{
    return this.http.post<User>(`${this.url}/users/`, user);
  }

  //Metodo para eliminar el usuario
  deleteUser(id: number): Observable<any>{
    return this.http.delete(`${this.url}/users/${id}`);
  }

  //Metodo que devuelve el usuario por id
  getPersonById(id: number): Observable<User>{
    return this.http.get<User>(`${this.url}/users/${id}`);
  }

  //Metodo que inserta el usuario modificado
  modifyUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.url}/users/${user.id}`, user);
  }
}
