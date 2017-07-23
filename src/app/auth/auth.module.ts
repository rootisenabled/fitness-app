import { environment } from '../../environments/environment';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// feature modules
import { SharedModule } from './shared/shared.module';
import { AuthRoutingRoutingModule } from './auth-routing.module';

// third-party
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ],
  declarations: [],
  providers: []
})
export class AuthModule { }
