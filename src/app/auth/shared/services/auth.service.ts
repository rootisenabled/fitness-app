import { User } from '../../models/User';
import { Injectable } from '@angular/core';

import { Store } from './../../../reactive-store/store';

import { AngularFireAuth } from 'angularfire2/auth';

import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {
  auth$ = this.af.authState.do(next => {
    if (!next) {
      this.store.set('user', null);
      return;
    };
    const user: User = {
      email: next.email,
      uid: next.uid,
      authenticated: true
    };
    this.store.set('user', user);
  })

  constructor(
    private af: AngularFireAuth,
    private store: Store
  ) { }

  createUser(email: string, password: string) {
    return this.af.auth
      .createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.af.auth
      .signInWithEmailAndPassword(email, password);
  }

}
