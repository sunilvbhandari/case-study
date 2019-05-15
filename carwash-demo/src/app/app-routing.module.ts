import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* import { DashboardComponent } from './dashboard/dashboard.component'; */
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent},{ path: 'login', component: LoginComponent},
  { path: 'reg', component: RegComponent},

  { path: '', pathMatch: 'full', redirectTo: 'home' },

  /* { path: 'dashboard', component: DashboardComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
