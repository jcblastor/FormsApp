import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  /*
    *podemos crear nuestro formulario agregadondo los inputs necesarios
    * peros si necesitamos un formulario muy complejo puede ser muy dificil de mantener
    * lo mejor es usar un formBulder
  miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('RTX 4080ti'),
    precio: new FormControl(100),
    existencias: new FormControl(5),
  })
 */

  // formBuilder: ejemplo
  miFormulario: FormGroup = this.formB.group({
    nombre: [
      ,
      [ Validators.required, Validators.minLength(3) ],
    ],
    precio: [
      ,
      [ Validators.required, Validators.min(0) ],
    ],
    existencias: [
      ,
      [ Validators.required, Validators.min(0) ],
    ],
  });

  constructor(
    private readonly formB: FormBuilder,
  ) { }

  ngOnInit(): void {
    // extablece valores predeterminados al formulario si no necesitamos
    this.miFormulario.reset({
      nombre: 'RTX 4080ti', // el nombre tiene que ser el mismo asignado al input
      precio: 0
    })
  }

  isValid(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar() {
    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.miFormulario.reset();
    console.log(this.miFormulario)
  }
}
