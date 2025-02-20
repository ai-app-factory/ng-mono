import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private activeTheme: string = 'light-theme';

  setTheme(theme: string) {
    document.body.classList.remove(this.activeTheme);
    document.body.classList.add(theme);
    this.activeTheme = theme;
  }

  getTheme(): string {
    return this.activeTheme;
  }
}