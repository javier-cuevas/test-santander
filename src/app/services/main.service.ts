import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Picture } from '../model/picture';
import { MOCKPICTURE } from '../mocks/pinturas';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient: HttpClient) { }
  /*
  obtenerPinturas(): Observable<Picture[]> {
    const url = 'assets/data.json';
    
    //return of(MOCKPICTURE);
  }
  */

  obtenerPinturas(){
    const url = 'assets/data.json';
    return this.httpClient.get(url);
  }

}
