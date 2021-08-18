import { Component } from '@angular/core';
import { Picture } from './model/picture';

//Services
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-project';

  public pinturas: Picture[];

  constructor(private data: MainService) { }

  ngOnInit(){
    this.getInfo();
  }

  getInfo(){
    this.data.obtenerPinturas().subscribe( (resp) =>{
      console.log(resp);
      this.pinturas = resp;
    });
  }

}
