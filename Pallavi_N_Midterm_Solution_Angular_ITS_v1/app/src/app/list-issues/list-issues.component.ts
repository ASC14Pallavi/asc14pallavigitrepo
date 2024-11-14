import { Component ,OnInit} from '@angular/core';
import { Issue } from '../model/issue.model';
import { IssueService } from '../service/issue.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-issues',
  templateUrl: './list-issues.component.html',
  styleUrl: './list-issues.component.css'
})
export class ListIssuesComponent implements OnInit {
  issues: Issue[] = [];
  searchQuery: string = '';

  constructor(
    private userService: IssueService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem("loggedIn")) {
      this.router.navigate(["/login"]);
    } else {
      this.fetchIssues();
    }
  }

  private fetchIssues(): void {
    this.userService.getIssues().subscribe(
      (userData) => {
        this.issues = userData;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  deleteIssue(toDeleteIssue: Issue): void {
    if (toDeleteIssue.id !== undefined) {
      this.userService.deleteIssue(toDeleteIssue.id).subscribe(() => {
        this.issues = this.issues.filter(user => user.id !== toDeleteIssue.id);
      });
    }
  }

  updateIssue(issueId: number | undefined): void {
    if (issueId !== undefined) {
      this.router.navigate(['update', issueId]);
    } else {
      console.error("User ID is undefined");
    }
  }

  searchIssues() {
    if (!this.searchQuery) {
      this.fetchIssues();  // Fetch all users if search query is empty
    } else {
      this.issues = this.issues.filter(issue => 
        issue.Title?.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
        issue.id?.toString().includes(this.searchQuery)
      );
    }
  }

}
