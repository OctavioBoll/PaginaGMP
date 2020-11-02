import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  mostrarForm:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ActivarForm(){
    this.mostrarForm =! this.mostrarForm;
  }
}
