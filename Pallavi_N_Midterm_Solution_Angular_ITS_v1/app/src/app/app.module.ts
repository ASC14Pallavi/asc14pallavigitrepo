import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- Import FormsModule and ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ListIssuesComponent } from './list-issues/list-issues.component';
import { RegisterComponent } from './register/register.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { UpdateIssueComponent } from './update-issue/update-issue.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';


@NgModule({
    declarations: [LoginComponent,ListIssuesComponent,RegisterComponent,AddIssueComponent,UpdateIssueComponent,HomeComponent
     
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule, // <-- Add this line
      ReactiveFormsModule, // <-- Add this line if using reactive forms
      HttpClientModule,
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }