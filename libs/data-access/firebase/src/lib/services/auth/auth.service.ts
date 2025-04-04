import {
  inject,
  Injectable
} from '@angular/core';
import {
  Auth,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  User,
  UserCredential,
  createUserWithEmailAndPassword
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly auth = inject(Auth);

  async signUpWithEmail(email: string, password: string): Promise<UserCredential> {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async signInWithEmail(email: string, password: string): Promise<UserCredential> {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async signInWithGoogle(): Promise<UserCredential> {
    return await signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  async signInWithGithub(): Promise<UserCredential> {
    return await signInWithPopup(this.auth, new GithubAuthProvider());
  }

  async signInAnonymously(): Promise<UserCredential> {
    return await signInAnonymously(this.auth);
  }

  async signOut(): Promise<void> {
    return await signOut(this.auth);
  }


  public getCurrentUser(): User | null {
    return this.auth.currentUser;
  }

  public onAuthStateChanged(callback: (user: User | null) => void): () => void {
    return onAuthStateChanged(this.auth, callback);
  }

  constructor() {}
}
