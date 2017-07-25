/**
 * Inspired by https://angularclass.com/blog/create-a-simple-reactive-store-for-angular-2/
 */

import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { State } from './state';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';

const state: State = {
  user: null
}

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().distinctUntilChanged();

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  set(name: string, currentState: any) {
    this.subject.next({
      ...this.value, [name]: currentState
    })
  }
}
