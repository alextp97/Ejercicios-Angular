import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  //EventEmitters
  parentMsg = new EventEmitter<string>();
  childMsg = new EventEmitter<string>();


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
