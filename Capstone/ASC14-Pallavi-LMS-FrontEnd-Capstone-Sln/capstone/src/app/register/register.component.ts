import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // Initialize the form group with validations
    this.registerForm = this.formBuilder.group({
      loginid: ['', [Validators.required, Validators.minLength(4)]], // Login ID validation
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9]).+$'), // Password must contain at least one letter and one number
        ],
      ], // Password validation
      name: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z ]+$')], // Name validation (only letters and spaces)
      ],
      email: ['', [Validators.required, Validators.email]], // Email validation
    });
  }

  // Getter for easy access to form controls
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop the process if the form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // Simulating saving the user details in localStorage
    const newUser = this.registerForm.value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Success alert and navigation to login page
    alert('Registration successful. You can now log in.');
    this.router.navigate(['/login']);
  }
}
