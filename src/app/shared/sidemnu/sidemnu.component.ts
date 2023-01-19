import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemnu',
  templateUrl: './sidemnu.component.html',
  styles: [
  ]
})
export class SidemnuComponent {
  templateMenu: MenuItem[] = [
    { texto: 'Básicos', ruta: './template/basicos' },
    { texto: 'Dinámicos', ruta: './template/dinamicos' },
    { texto: 'Switches', ruta: './template/switches' },
  ]

  reactiveMenu: MenuItem[] = [
    { texto: 'Básicos', ruta: './reactive/basicos' },
    { texto: 'Dinámicos', ruta: './reactive/dinamicos' },
    { texto: 'Switches', ruta: './reactive/switches' },
  ]
}
