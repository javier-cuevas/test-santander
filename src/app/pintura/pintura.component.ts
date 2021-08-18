import { Component, OnInit, Input } from '@angular/core';
import { Picture } from '../model/picture';

@Component({
  selector: 'app-pintura',
  templateUrl: './pintura.component.html',
  styleUrls: ['./pintura.component.css']
})
export class PinturaComponent implements OnInit {

  @Input() info:Picture;

  public pintura: Picture =
  {
    "nombre": "Mona Lisa",
    "autor": "Leonardo da Vinci",
    "img": "./assets/img/hotbook-49.jpg",
    "descripcion":"texto descripcion"
    };

  constructor() { }

  ngOnInit() {
  }

}
