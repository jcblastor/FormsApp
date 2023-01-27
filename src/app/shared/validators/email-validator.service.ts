import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(
    private readonly http: HttpClient,
  ) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`).pipe(
      map( resp => {
        return (resp.length === 0) ? null : { existeEmail: true };
      })
    )
  }

}