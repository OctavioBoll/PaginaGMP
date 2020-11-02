import { Component, OnInit } from '@angular/core';
import { ArticulosAtracciones } from '../../articulos/Atracciones'

@Component({
  selector: 'app-atracciones',
  templateUrl: './atracciones.component.html',
  styleUrls: ['./atracciones.component.css']
})
export class AtraccionesComponent implements OnInit {

  items = ArticulosAtracciones;

  constructor() { }

  ngOnInit(): void {
  }

}
