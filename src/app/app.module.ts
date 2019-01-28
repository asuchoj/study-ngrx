import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {CarsFormComponent } from './cars-form/cars-form.component';
import {CarComponent} from './car/car.component';
import {carsReduer} from './redux/cars.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({carPage: carsReduer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
