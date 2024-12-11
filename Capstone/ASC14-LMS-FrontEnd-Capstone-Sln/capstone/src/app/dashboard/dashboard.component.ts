import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
 // standalone: true,
  //imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router:Router){}

  logout() {
    sessionStorage.removeItem('loggedIn');
    alert("You're logged out");
    this.router.navigate(['/login']);
  }

}
