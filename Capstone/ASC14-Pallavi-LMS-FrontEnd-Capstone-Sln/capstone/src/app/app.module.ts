import { FormsModule, NgModel, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AppRoutingModule } from "./app-routing.module";
import { RegisterComponent } from "./register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CatalogueListComponent } from "./catalogue-list/catalogue-list.component";
import { CirculationComponent } from "./circulation/circulation.component";
import { MemberComponent } from "./member/member.component";



@NgModule({
    declarations:[LoginComponent,RegisterComponent,DashboardComponent,CatalogueListComponent,CirculationComponent,MemberComponent],
    imports:[BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,AppRoutingModule],
    bootstrap:[AppComponent]

})



export class AppModule{

}