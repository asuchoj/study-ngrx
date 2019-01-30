import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {Cars} from './car.model';
import {AppState} from './redux/app.state';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public carState: Observable<Cars>;

  constructor(private store: Store<AppState>){}

  ngOnInit() {
    console.log(1);

    this.carState = this.store.select('carPage').pipe(
      tap(c => console.log(c))
    );
  }
}
