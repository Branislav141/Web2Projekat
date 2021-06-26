import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PocetnaStranicaComponent } from './components/pocetna-stranica/pocetna-stranica.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CallsComponent } from './modules/incidentposts/calls/calls.component';
import { MyIncidentsComponent } from './modules/my-incidents/my-incidents.component';
import { NewIncidentComponent } from './modules/new-incident/new-incident.component';
import { NewsafetydocumentComponent } from './modules/newsafetydocument/newsafetydocument.component';
import { PostsComponent } from './modules/posts/posts.component';
import { SafetydocumentsComponent } from './modules/safetydocuments/safetydocuments.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { WorkRequestsComponent } from './modules/work-requests/work-requests.component';
import { NewRequestComponent } from './modules/work-requests/new-request/new-request.component';
import { NoAuthGuard } from './guards/noauth.guard';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/interceptors/token.interceptor';

const routes: Routes = [
  {
    path: '',
    component: PocetnaStranicaComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'default',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'calls',
        component: CallsComponent,
      },
      {
        path: 'myIncidents',
        component: MyIncidentsComponent,
      },
      {
        path: 'newIncidents',
        component: NewIncidentComponent,
      },
      {
        path: 'safety',
        component: SafetydocumentsComponent,
      },
      {
        path: 'newsafetydoc',
        component: NewsafetydocumentComponent,
      },
      {
        path: 'work-requests',
        component: WorkRequestsComponent,
      },
      {
        path: 'new-work-request',
        component: NewRequestComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class AppRoutingModule {}
