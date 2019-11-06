import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
// import { environment } from './../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(x => console.log(x)); 
  }

  login() {
    // console.log("It's working!");
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
}
