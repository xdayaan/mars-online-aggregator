// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  login(username: string, password: string): boolean {
    // Implement your authentication logic here.
    // For demonstration purposes, we'll just check if both fields are non-empty.
    if (username && password) {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
