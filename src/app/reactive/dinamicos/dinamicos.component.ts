import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.formB.group({
    nombre: [
      ,
      [ Validators.required, Validators.minLength(3) ]
    ],
    favoritos:  this.formB.array([
      // se puede ser bien explicitos agregando los datos así:
      // this.formB.control('nombre', validadoresSincronos, validadores asyncronos)
      // pero es lo mismo de esta forma.
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ], Validators.required )
  })

  /*
    Si necesitamos obtener los valores de un input
    que no sea parte del objeto que tenemos que guardar
    nos creamos un FormControl que haga referencia a ese input
    y con eso podemos hacer todas las validaciones que necesitamos.
  */
  nuevoFavorito: FormControl = this.formB.control( '', Validators.required)

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray
  }

  constructor(
    private readonly formB: FormBuilder
  ) { }

  isValid(campo: string): boolean | null {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  agregarFavorito() {
    if(this.nuevoFavorito.invalid) return;
    // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required))
    this.favoritosArr.push(this.formB.control(
      this.nuevoFavorito.value, Validators.required
    ));
    this.nuevoFavorito.reset();
  }

  guardar():void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
  }

  borrar(index: number): void {
    this.favoritosArr.removeAt(index)
  }

}
