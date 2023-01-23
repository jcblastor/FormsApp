import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ false, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ],
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({ ...this.persona, condiciones: false });

    // si necesitamos sincronizar nuestro objeto con el formulario
    this.miFormulario.valueChanges.subscribe( ({ condiciones, ...rest}) => {
      // podemos desestruturar los valores del form y eliminar lo que no necesitemos
      // delete form.condiciones;
      this.persona = rest;
    })
  }

  guardar(): void {
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    this.persona = formValue;
  }

}
