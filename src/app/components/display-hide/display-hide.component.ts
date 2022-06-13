import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-hide',
  templateUrl: './display-hide.component.html',
  styleUrls: ['./display-hide.component.scss']
})
export class DisplayHideComponent implements OnInit {
  
  show: boolean = false; //La variable show la inicializo en false para que no muestre nada al principio
  showText: string = 'Mostrar'; //Creo una variable que le asigne al botón un texto u otro dependiendo de si está oculto o activo


  //Este método se encarga de cambiar el valor del botón
  showHide() {
    
    if (this.show) {
      this.show = false;
      this.showText = 'Mostrar'
    }
    else {
      this.show = true;
      this.showText = 'Ocultar'
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
