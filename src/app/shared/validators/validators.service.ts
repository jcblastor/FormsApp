import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  nombrePattern: string = '([a-zA-z]+) ([a-zA-z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noPuedeSerBlastor = (control: FormControl): ValidationErrors | null => {
    const valor: string = control.value?.trim().toLowerCase();
    if(valor === 'blastor') {
      // si no cumple la validacion retornamos un error y esto le dice
      // angular que la validacion fallo.
      // el error tiene que ser un objeto
      return {
        noBlastor: true
      }
    }
    // Cuando pase una validacion necesitamos a fuerza retornar null
    // esto le dice a angular que todo esta ok
    return null;
  }

  camposIguales(campo1: string, campo2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1: string = formGroup.get(campo1)?.value;
      const pass2: string = formGroup.get(campo2)?.value;

      if ( pass1 !== pass2 ) {
        // asignamos el error al campo que necesitemos marque el error
        formGroup.get(campo2)?.setErrors({ noIguales: true })
        // retorna un error visible en todo el formulario
        return { noIguales: true };
      }

      if( pass1?.length === pass2?.length ) {
        formGroup.get(campo2)?.setErrors(null);
      }

      return null;
    }
  }
}
