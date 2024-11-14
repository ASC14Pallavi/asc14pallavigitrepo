import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Assume you have an AuthService

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user is authenticated
    if (this.authService.isAuthenticated()) {
      return true; // Allow access if authenticated
    } else {
      // Redirect to login if not authenticated
      this.router.navigate(['/login']);
      return false;
    }
  }
}
