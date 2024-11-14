import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  // Navigate to Add Issue page
  navigateToAddIssue() {
    this.router.navigate(['/add-issue']);
  }

  // Navigate to List Issues page
  navigateToListIssues() {
    this.router.navigate(['/list-issues']);
  }
}

