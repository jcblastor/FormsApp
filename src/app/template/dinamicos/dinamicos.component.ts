import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Carlos',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'Death Stranding' },
    ]
  }

  guardar() {
    console.log('click')
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1)
  }

  agregarJuego() {
    const newFavorite: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...newFavorite});
    this.nuevoJuego = '';
  }
}
