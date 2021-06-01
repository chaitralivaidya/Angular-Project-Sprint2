import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateUserAdminComponent } from './create-user-admin/create-user-admin.component';
import { ViewPolicyAdminComponent } from './view-policy/view-policy-admin.component';
import { CreateClaimComponent } from './create-claim/create-claim.component';
import { ViewClaimComponent } from './view-claim/view-claim.component';
import { CreatePolicyComponent } from './create-policy/create-policy.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [{path:'users' , component:LoginComponent},
                        {path:'navbar' , component:NavBarComponent},
                        {path:'' , component:HomeComponent},
                        {path:'navbaradmin' , component:NavBarAdminComponent},
                        {path:'navbaradmin/createuseradmin' , component:CreateUserAdminComponent},
                        {path:'navbaradmin/viewpolicyadmin' , component:ViewPolicyAdminComponent},
                        {path:'createclaim' , component:CreateClaimComponent},
                        {path:'navbaradmin/viewclaim' , component:ViewClaimComponent},
                        {path:'navbaradmin/createpolicy' , component:CreatePolicyComponent},
                        {path:'createAccount', component:CreateAccountComponent},
                        {path:'questions', component: QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
