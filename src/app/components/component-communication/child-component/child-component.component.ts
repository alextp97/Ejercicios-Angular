
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})


export class ChildComponentComponent implements OnInit {

  messageScreen = '';

  @Input() messagechild = ''; //Decorador Input para poder recibir datos del padre
  @Output() childMsg = new EventEmitter<string>(); //Decorador del Output para enviar datos al padre

  constructor( private _communicationService: CommunicationService ) { }

  ngOnInit(): void {

    //Me suscribo al parentMsg Emit
    this._communicationService.parentMsg.subscribe( (msg) => {
      this.messageScreen = msg;
    });

    this._communicationService.getParentMsg().subscribe((msg) => {
      this.messageScreen = msg;
    })

    
  }


  //Metodos para enviar mensajes al padre mediante un servicio, Output y Observable
  sendMsgService() {
    this._communicationService.childMsg.emit('child using service');

  }

  //Método para enviar el mensaje del Output
  sendMsgOutput() {
    this.childMsg.emit('child using output property');
  }

  //Método para enviar el mensaje al padre mediante Observable
  sendMsgObservable(){
    this._communicationService.sendChildMsg('child using observable');
  }

}
