import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // You would typically check the token from localStorage or a backend service
  private isAuthenticatedStatus = false;

  constructor() { }

  // Simulate a login action (set the authentication status)
  login() {
    this.isAuthenticatedStatus = true;
    // Save the auth token (for example, to localStorage)
    localStorage.setItem('authToken', 'your-token-here');
  }

  // Simulate a logout action (clear the authentication status)
  logout() {
    this.isAuthenticatedStatus = false;
    localStorage.removeItem('authToken');
  }

  // Check if the user is authenticated (has a valid token)
  isAuthenticated(): boolean {
    // Here you can check for a valid auth token or session
    return this.isAuthenticatedStatus || !!localStorage.getItem('authToken');
  }
}
