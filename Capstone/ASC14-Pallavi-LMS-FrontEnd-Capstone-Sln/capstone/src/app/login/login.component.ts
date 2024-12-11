import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginAttempts: { [email: string]: { count: number; lockedUntil?: Date } } = {}; // Track login attempts per email
  errorMessage: string = ''; // Error message to display

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      loginid: ['teddy', Validators.required],
      email: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,16}$/
          ),
        ],
      ],
    });
  }

  onSubmit() {
    const loginid: string = this.loginForm.get('loginid')?.value;
    const email: string = this.loginForm.get('email')?.value;
    const password: string = this.loginForm.get('password')?.value;

    // Check if the email is locked
    if (this.loginAttempts[email]?.lockedUntil && new Date() < this.loginAttempts[email].lockedUntil) {
      this.errorMessage = `Your account is locked. Please try again after ${this.loginAttempts[email].lockedUntil?.toLocaleTimeString()}.`;
      return;
    }

    // Retrieve stored users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some(
      (user: any) => user.loginid === loginid && user.password === password && user.email === email
    );

    if (userExists) {
      sessionStorage.setItem('loggedIn', 'yes');
      this.router.navigate(['/dashboard']);
      this.errorMessage = ''; // Clear any previous error messages
      this.resetLoginAttempts(email); // Reset login attempts for successful login
    } else {
      // Increment login attempts
      this.trackFailedLogin(email);
    }
  }

  trackFailedLogin(email: string) {
    if (!this.loginAttempts[email]) {
      this.loginAttempts[email] = { count: 1 }; // Initialize attempts for this email
    } else {
      this.loginAttempts[email].count++;
    }

    if (this.loginAttempts[email].count >= 3) {
      // Lock the account for 30 minutes
      const lockUntil = new Date();
      lockUntil.setMinutes(lockUntil.getMinutes() + 30);
      this.loginAttempts[email].lockedUntil = lockUntil;
      this.errorMessage = `Your account is locked due to too many failed login attempts. Please try again after ${lockUntil.toLocaleTimeString()}.`;
    } else {
      const remainingAttempts = 3 - this.loginAttempts[email].count;
      this.errorMessage = `Invalid email or password. You have ${remainingAttempts} attempt(s) left.`;
    }
  }

  resetLoginAttempts(email: string) {
    delete this.loginAttempts[email]; // Clear login attempts for the email
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
}
