import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CirculationComponent } from './circulation/circulation.component';
import { CatalogueListComponent } from './catalogue-list/catalogue-list.component';
import { MemberComponent } from './member/member.component';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    {path:'catalogues',component:CatalogueListComponent},
    {path:'circulation',component:CirculationComponent},
    { path: 'member', component: MemberComponent }
    

]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }