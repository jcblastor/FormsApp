import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ValidatorsService } from '../../../shared/validators/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

import { emailPattern } from '../../../shared/validators/validaciones';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    // agregamos los inputs que manejaremos
    // agregamos los validadores personalizados, tenemos 2 formas
    // 1.- export tando los validadores, variables o funciones, etc
    // 2.- desde un servicio personalizado.
    nombre: ['', [ Validators.required, Validators.pattern(this.vs.nombrePattern) ]],
    email: ['', [ Validators.required, Validators.pattern(emailPattern) ], [this.emailValidator]],
    username: ['', [ Validators.required, this.vs.noPuedeSerBlastor ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]],
    // si necesitamos hacer validaciones en 2 o mas inputs y estos dependan
    // del valor de otro input en tiempo real
    // despues del objeto de creacion del formulario podemos enviar otro obejto
    // con validaciones globales
  }, {
    validators: [this.vs.camposIguales('password', 'password2')]
  })

  constructor(
    private readonly fb: FormBuilder,
    private readonly vs: ValidatorsService,
    private readonly emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Carlos Guzman',
      email: 'test1@test.com',
      username: 'jcblastor'
    });
  }

  isValid(campo: string): boolean | undefined {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitForm() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
