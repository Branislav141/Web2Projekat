import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PocetnaStranicaComponent } from './components/pocetna-stranica/pocetna-stranica.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
{
  path: 'pocetna-stranica',
  component:PocetnaStranicaComponent,
  
},
{
  path: '',
  component:PocetnaStranicaComponent,
},
{
  path: 'login',
  component:LoginComponent,
  
},
{
  path: 'register',
  component:RegisterComponent,
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
