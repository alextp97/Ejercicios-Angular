import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../interfaces/user.interface';
import { CrudService } from '../services/crud.service';
import { ValidatorsService } from '../services/validators.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  user!: User;

  coutry: string[] = ["España", "Francia", "Portugal", "México", "Alemania", "Italia", "Japón"];
  

  //Para ocultar la contraseña
  hide = true;

  myForm: FormGroup = this.fb.group({
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



  
  constructor( private fb: FormBuilder, 
               private validatorService: ValidatorsService,
               private crudService: CrudService,
                ) { }

  ngOnInit(): void {
  }

  //Compruebo si los campos han sido tocados o tienen errores para mostrar los datos
  fieldNoValid( field: string ){
    return this.myForm.controls[field].errors
            && this.myForm.controls[field].touched;
  }


  create(){

    if( this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }

  

}
