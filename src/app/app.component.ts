import {NgRedux} from 'ng2-redux/lib';
import { Component } from '@angular/core';
 // <- New
import { CounterActions } from './app.actions'; // <- New
import { IAppState } from "../store"; // <- New
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  count: number;
  subscription; // <- New;
  readonly count$: Observable<number>; // <- New
  constructor(                           // <- New
    private ngRedux: NgRedux<IAppState>, // <- New
    private actions: CounterActions) {

    // this.subscription = ngRedux.select<number>('count') // <- New
    //   .subscribe(newCount => this.count = newCount);    // <- New

            this.count$ = ngRedux.select<number>('count'); // <- New


  }  // <- New

  increment() {
    this.ngRedux.dispatch(this.actions.increment()); // <- New
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement()); // <- New
  }
}
