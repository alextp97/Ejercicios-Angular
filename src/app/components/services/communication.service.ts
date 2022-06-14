import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  //EventEmitters
  parentMsg : EventEmitter<string> = new EventEmitter();
  childMsg : EventEmitter<string> = new EventEmitter();


  //Observables para el padre e hijo

  //Padre
  parentMsgObservable = new Subject<string>();

  sendParentMsg(msg : string){
    return this.parentMsgObservable.next(msg);
  }

  getParentMsg(){
    return this.parentMsgObservable.asObservable();
  }


  //Hijo
  childMsgObservable = new Subject<string>();

  sendChildMsg(msg : string){
    return this.childMsgObservable.next(msg);
  }

  getChildMsg(){
    return this.childMsgObservable.asObservable();
  }

  constructor() { }
}
