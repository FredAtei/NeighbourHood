import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HoodComponent } from './hood/hood.component';
import { BusinessComponent } from './business/business.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path: 'hood', component:HoodComponent},
  {path: 'business', component:BusinessComponent}
  {path:'register', component:RegisterComponent},

  { path: 'user/:id', component: UserComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
