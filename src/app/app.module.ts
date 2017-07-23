import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// libraries
import { MaterializeModule } from 'angular2-materialize';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


// feature modules
import { AuthModule } from './auth/auth.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*

var config = {
    apiKey: "AIzaSyDWHiPTGInyZDNP0IEDAR3FRadK-mdInB0",
    authDomain: "fitness-app-64820.firebaseapp.com",
    databaseURL: "https://fitness-app-64820.firebaseio.com",
    projectId: "fitness-app-64820",
    storageBucket: "fitness-app-64820.appspot.com",
    messagingSenderId: "244032117951"
  };

*/
