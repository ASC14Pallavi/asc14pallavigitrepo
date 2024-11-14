import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssueService } from '../service/issue.service'; // Ensure the service is properly imported
import { Issue } from '../model/issue.model'; // Ensure the model is correctly imported

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent {
  addIssueForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private issueService: IssueService,
    private router: Router
  ) {
    this.addIssueForm = this.fb.group({
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
    if (this.addIssueForm.valid) {
      const newIssue: Issue = this.addIssueForm.value;
      this.issueService.createIssue(newIssue).subscribe(
        () => {
          this.router.navigate(['/list-issues']); // Navigate to list after success
        },
        (error) => {
          console.error('Error adding issue', error);
        }
      );
    }
  }
  navigateToAddIssue() {
    this.router.navigate(['/add-issue']);
  }
}

