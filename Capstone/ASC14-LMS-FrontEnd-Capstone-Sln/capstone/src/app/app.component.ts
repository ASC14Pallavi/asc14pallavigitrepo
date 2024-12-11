/*import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'capstone';
}*/

import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {}

  logout() {
    sessionStorage.removeItem('loggedIn');
    alert("You're logged out");
    this.router.navigate(['/']);
  }

  /*navigateToHome() {
    this.router.navigate(['/home']);
  }
  navigateToAddIssue() {
    this.router.navigate(['/add-issue']);
  }

  navigateToListIssues() {
    this.router.navigate(['/list-issues']);
  }*/

}

