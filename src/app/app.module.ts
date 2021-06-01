import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { NavBarAgentComponent } from './nav-bar-agent/nav-bar-agent.component';
import { NavBarInsuredComponent } from './nav-bar-insured/nav-bar-insured.component';
import { CreateUserAdminComponent } from './create-user-admin/create-user-admin.component';
import { ViewPolicyAdminComponent } from './view-policy/view-policy-admin.component';
import { CreateClaimComponent } from './create-claim/create-claim.component';
import { ViewClaimComponent } from './view-claim/view-claim.component';
import { CreatePolicyComponent } from './create-policy/create-policy.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    NavBarAdminComponent,
    NavBarAgentComponent,
    NavBarInsuredComponent,
    CreateUserAdminComponent,
    ViewPolicyAdminComponent,
    CreateClaimComponent,
    ViewClaimComponent,
    CreatePolicyComponent,
    CreateAccountComponent,
    QuestionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     ReactiveFormsModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
