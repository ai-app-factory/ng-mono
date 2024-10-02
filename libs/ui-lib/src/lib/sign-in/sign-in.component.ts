import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup
} from '@angular/fire/auth';

@Component({
  selector: 'lib-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  private auth: Auth = inject(Auth);
  email = '';
  password = '';
  confirmPassword = '';
  hidePassword = true;
  isSignIn = true;

  toggleSignIn() {
    this.isSignIn = !this.isSignIn;
  }

  async onSubmit() {

    try {

    } catch (error) {
      console.error('error: ', error);
    }
  }

  async signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(this.auth, provider);
    } catch (error) {
      console.error('error: ', error);
    }
  }

  async signInWithGithub() {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(this.auth, provider);
    } catch (error) {
      console.error('error: ', error);
    }
  }

}
