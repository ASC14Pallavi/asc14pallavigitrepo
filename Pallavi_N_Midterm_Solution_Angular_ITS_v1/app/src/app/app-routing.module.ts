import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListIssuesComponent } from './list-issues/list-issues.component';
import { RegisterComponent } from './register/register.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { UpdateIssueComponent } from './update-issue/update-issue.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'list-issues', component: ListIssuesComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'add-issue', component: AddIssueComponent },
    { path: 'update/:id', component: UpdateIssueComponent},
    { path: 'home', component: HomeComponent }, 

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }