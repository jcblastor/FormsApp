import { FormControl, ValidationErrors } from '@angular/forms';

// la mejor forma de trabajar las validaciones depende el proyecto
// trabajarlos en un archivo aparte y luego importar donde lo necesitemos.
// Esta forma de trabajo se recomienda para validaciones que no necesiten
// datos de un servicio u otra clase.

export const nombrePattern: string = '([a-zA-z]+) ([a-zA-z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

// dentro las validaciones podemos enviar funciones creadas por nosotros
  // y validarlo como mas nos convenga, recordemos que hay validaciones sincroncas y asyncronas
  // input: ['nombre input', [validaciones sincronas], [validaciones asyncronas]]
  export const noPuedeSerBlastor = (control: FormControl): ValidationErrors | null => {
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
