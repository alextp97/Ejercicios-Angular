import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  messageScreen = '';

  constructor( private _communicationService: CommunicationService ) { }

  ngOnInit(): void {

    //Me suscribo al parentMsg Emit
    this._communicationService.parentMsg.subscribe( (msg) => {
      this.messageScreen = msg;
    })
  }


  sendMsgService() {
    this._communicationService.childMsg.emit('child using service');
    
  }

}
