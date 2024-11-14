
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      loginid: ['teddy', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const loginid: string = this.loginForm.get('loginid')?.value;
    const password: string = this.loginForm.get('password')?.value;

    // Retrieve stored users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some(
      (user: any) => user.loginid === loginid && user.password === password
    );

    if (userExists) {
      sessionStorage.setItem('loggedIn', 'yes');
      //this.authService.login();
      this.router.navigate(['/list-issues']);
    } else {
      alert("Invalid login credentials. Please try again.");
    }
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
    
}
