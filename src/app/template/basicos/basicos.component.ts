import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  // Con ViewChild buscamos la referencia en el DOM
  @ViewChild('miFormulario') myForm!: NgForm;

  // validar el input
  isValidName(): boolean {
    return this.myForm?.controls['producto']?.invalid && this.myForm?.controls['producto']?.touched
  }

  isValidPrice(): boolean {
    return (this.myForm?.controls['precio']?.value < 0 || this.myForm?.controls['precio']?.value === '' || this.myForm?.controls['precio']?.value === null )
      &&  this.myForm?.controls['precio']?.touched
  }

  isValidExist(): boolean {
    return this.myForm?.controls['existencias']?.errors !== null && this.myForm?.controls['existencias']?.touched
  }

  guardar() {
    console.log(this.myForm);
    // se puede llamar la funcion resetForm y deja todos los campos vacios,
    // si necesitamos que los campos empiecen con un valor luego de guardar
    // podemos enviar un objeto con los campos que necesitemos tengan valor
    this.myForm.resetForm({
      precio: 0,
      existencias: 0,
    });
  }
}
