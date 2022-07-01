import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../interfaces/user.interface';
import { CrudService } from '../services/crud.service';
import { SharedService } from '../services/shared.service';
import { ValidatorsService } from '../services/validators.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  //Implemento la interfaz de User para los campos del formulario
  user!: User;

  coutry: string[] = ["España", "Francia", "Portugal", "México", "Alemania", "Italia", "Japón"];
  

  //Para ocultar la contraseña
  hide = true;

  myForm: FormGroup = this.fb.group({
    id: [""],
    username: [ '', [Validators.required, Validators.minLength(3)] ],
    password: [ '', [Validators.required, Validators.minLength(4)]],
    password2: [ '', [Validators.required] ],
    email: [ '', [Validators.required, Validators.email] ],
    offers: [ false ],
    coutry: ['' , [Validators.required]],
    city: [ '', [Validators.required] ]
  }, 
  {
    validators: [ this.validatorService.samePass('password','password2')]
  })


  //Constructor del crud
  constructor( private fb: FormBuilder, 
               private validatorService: ValidatorsService,
               private crudService: CrudService,
               private sharedService: SharedService
                ) { }

  ngOnInit(): void {
  }


  //Compruebo si los campos han sido tocados o tienen errores para mostrar los datos
  fieldNoValid( field: string ){
    return this.myForm.controls[field].errors
            && this.myForm.controls[field].touched;
  }


  //Este método crea nuevo usuario 
  createUser(){

    if( this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return;
    }

    if(this.myForm.get('id')?.value === ""){

      //Cojo el valor del formulario y lo envio como el nuevo usuario con el método newUser
      this.crudService.newUser( this.myForm.value)
      .subscribe(() => this.sharedService.sendUser())
    
      //console.log(this.myForm.value);
      this.myForm.reset('');

    }else{

      this.crudService.modifyUser(this.myForm.value)
      .subscribe(() => this.sharedService.sendUser())

      this.myForm.reset('');

    }


    
  }


  

}
