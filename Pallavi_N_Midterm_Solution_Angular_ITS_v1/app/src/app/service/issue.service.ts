import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../model/issue.model';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private baseUrl = 'http://localhost:3000/issues';

  constructor(private httpClient: HttpClient) {}

  getIssues(): Observable<Issue[]> {
    return this.httpClient.get<Issue[]>(this.baseUrl);
  }

  getIssueById(id: number): Observable<Issue> {
    return this.httpClient.get<Issue>(`${this.baseUrl}/${id}`);
  }

  createIssue(issue:Issue): Observable<Issue> {
    return this.httpClient.post<Issue>(this.baseUrl, issue);
  }

  updateIssue(id: number, issue: Partial<Issue>): Observable<Issue> {
    return this.httpClient.put<Issue>(`${this.baseUrl}/${id}`, issue);
  }

  deleteIssue(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}