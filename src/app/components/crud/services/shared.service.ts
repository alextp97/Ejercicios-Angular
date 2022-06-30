import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  private subject = new Subject<void>();

  constructor() { }


  sendUser(){
    this.subject.next();
  }

  getUserEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  
}
