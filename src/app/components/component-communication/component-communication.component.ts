import { Component, OnInit } from '@angular/core';
import { CommunicationService } from './services/communication.service';

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.scss']
})


export class ComponentCommunicationComponent implements OnInit {

  message = ''; //Mensaje que se envía al componente hijo
  messageOnScreen = ''; //Mensaje que se muestra en pantalla

  constructor( private _communicationService: CommunicationService ) { }

  ngOnInit(): void {

    //Me suscribo al childMsg Emit
    this._communicationService.childMsg.subscribe( (msg) => {
      this.messageOnScreen = msg;
    });

    //Me suscribo al childmsg del observable
    this._communicationService.getChildMsg().subscribe((msg) => {
      this.messageOnScreen = msg;
    });
  }


  //Metodo para obtener el mensaje del hijo enviado mediante el Output
  getChildMsg( msg: string) {
    this.messageOnScreen = msg;
  }


  //Metodos para enviar mensajes al hijo mediante un servicio, Input y Observable

  //Enviar mensaje al hijo con un servicio
  sendMsgService() {
    this._communicationService.parentMsg.emit('parent using service');
    this.message = '';
  }

  //Enviar mensaje al hijo usando Input
  sendMsgInput(){
    this.message = 'parent using input property';
  }

  //Enviar mensaje al hijo usando observable
  sendMsgObservable() {
    this.message = 'parent using Observable';
  }

}
