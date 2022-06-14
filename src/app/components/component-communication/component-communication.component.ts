import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.scss']
})
export class ComponentCommunicationComponent implements OnInit {

  message = '';
  messageOnScreen = '';

  constructor( private _communicationService: CommunicationService ) { }

  ngOnInit(): void {

    //Me suscribo al childMsg Emit
    this._communicationService.childMsg.subscribe( (msg) => {
      this.messageOnScreen = msg;
    })
  }


  //Metodos para enviar mensajes al hijo mediante un servicio, Input y Observable
  sendMsgService() {
    this._communicationService.parentMsg.emit('parent using service');
    this.message = '';
  }

}
