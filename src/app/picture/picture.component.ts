import { Component, OnInit } from '@angular/core';
import { Picture } from '../model/picture';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  public picture: Picture;

  public pictures: Picture[];

  constructor() { }

  ngOnInit() {
  }

}
