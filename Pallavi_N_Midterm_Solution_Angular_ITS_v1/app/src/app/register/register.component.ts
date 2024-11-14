import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  //standalone: true,
  //imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      loginid: ['', [Validators.required, Validators.minLength(4)]],  // Login ID minimum length validation
      password: ['', [Validators.required, Validators.minLength(6)]], // Password minimum length validation
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]] // Name must contain only letters and spaces
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    
    // Stop if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // Save user details
    const newUser = this.registerForm.value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registration successful. You can now log in.");
    this.router.navigate(['/login']);
  }

}
