import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  //EventEmitters
  parentMsg : EventEmitter<string> = new EventEmitter();
  childMsg : EventEmitter<string> = new EventEmitter();

  constructor() { }
}
