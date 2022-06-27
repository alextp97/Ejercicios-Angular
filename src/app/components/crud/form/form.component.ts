import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  hide = true;

  myForm: FormGroup = new FormGroup({
    'username': new FormControl('Don Staka'),
    'password': new FormControl('12345'),
    'email': new FormControl('staka@gmail.com'),
    'country': new FormControl('Spain'),
    'city': new FormControl('Jaen')
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
