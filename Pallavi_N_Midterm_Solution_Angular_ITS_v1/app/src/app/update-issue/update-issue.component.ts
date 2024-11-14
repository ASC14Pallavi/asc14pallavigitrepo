import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Issue } from '../model/issue.model';
import { IssueService } from '../service/issue.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-issue',
 // standalone: true,
 // imports: [],
  templateUrl: './update-issue.component.html',
  styleUrl: './update-issue.component.css'
})
export class UpdateIssueComponent {
  updateForm!: FormGroup;  // Use definite assignment assertion (!)
  issue!: Issue;  // Use definite assignment assertion (!)

  constructor(
    private issueService: IssueService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // Get user ID from route params
    const issueId = +this.route.snapshot.paramMap.get('id')!;

    if (issueId) {
      this.issueService.getIssueById(issueId).subscribe(
        (issue: Issue) => {
          this.issue =issue;
          this.updateForm.patchValue(issue);
        },
        error => {
          console.error('issue not found', error);
        }
      );
    }

    // Initialize the form with validations
    this.updateForm = this.fb.group({
      id: ['', Validators.required],
      Title: ['', Validators.required],
      Description: ['', Validators.required],
      Priority: ['Medium', Validators.required],
      Status: ['To Do', Validators.required],
      Assignee: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      const updatedIssue = this.updateForm.value;
      this.issueService.updateIssue(updatedIssue.id, updatedIssue).subscribe(
        (issue) => {
          this.router.navigate(['/list-issues']);
        },
        (error) => {
          console.error('Update failed', error);
        }
      );
    }
  }

}
