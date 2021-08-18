import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PictureComponent } from './picture/picture.component';
//import { MOCKPICTURE } from './mocks/pinturas';
import { PinturaComponent } from './pintura/pintura.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureComponent,
    //MOCKPICTURE,
    PinturaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
