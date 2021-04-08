import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PocetnaStranicaComponent } from './components/pocetna-stranica/pocetna-stranica.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';


const routes: Routes = [


{
  path:'',
  component:PocetnaStranicaComponent,
  children:[{
    path:'',
    component:LoginComponent
}, {
  path:'register',
  component:RegisterComponent
  }]},


  {
    path:'default',
    component:DefaultComponent,
    children:[{
      path:'dashboard',
      component:DashboardComponent
  }, {
    path:'posts',
    component:PostsComponent
    }]},
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
