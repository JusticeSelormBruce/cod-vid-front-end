import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Model/register/register.component';
import { LoginComponent } from './Model/login/login.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule]
})
export class AppRoutingModule { }
