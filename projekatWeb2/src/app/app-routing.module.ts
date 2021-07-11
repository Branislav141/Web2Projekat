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
import { PostsComponent } from './modules/posts/posts.component';
import { SafetydocumentsComponent } from './modules/safetydocuments/safetydocuments.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { WorkRequestsComponent } from './modules/work-requests/work-requests.component';
import { WorkRequestComponent } from './modules/work-requests/work-request/work-request.component';
import { NoAuthGuard } from './guards/noauth.guard';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/interceptors/token.interceptor';
import { TeamsComponent } from './modules/teams/teams.component';
import { NewTeamComponent } from './modules/teams/new-team/new-team.component';
import { ModifyTeamComponent } from './modules/teams/modify-team/modify-team.component';
import { NewWorkRequestComponent } from './modules/work-requests/new-work-request/new-work-request.component';
import { PreventUnsavedChangesGuard } from './guards/prevent-unsaved-changes-guard';
import { ElementiMrezeComponent } from './modules/elMreze/elementi-mreze/elementi-mreze.component';
import { DodajElementMrezeComponent } from './modules/elMreze/noviEl/dodaj-element-mreze/dodaj-element-mreze.component';
import { CreatenewincidentComponent } from './modules/createIncidet/createnewincident/createnewincident.component';
import { NewsafetydocumentComponent } from './modules/newsafetyDoc/newsafetydocument/newsafetydocument.component';
import { NewSafeDocComponent } from './modules/safetycompinf/new-safe-doc/new-safe-doc.component';

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
        path: 'elementiMreze',
        component: ElementiMrezeComponent,
      },
      {
        path: 'dodajElMreze',
        component: DodajElementMrezeComponent,
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
        component: CreatenewincidentComponent,
      },
      {
        path: 'newSafeDoc',
        component: NewSafeDocComponent,
      },
      {
        path: 'newSafeDoc/:id',
        component: NewSafeDocComponent,
      },
    

      
      {
        path: 'novi/:id',
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
        path: 'work-request/:id',
        component: WorkRequestComponent,
      },
      {
        path: 'teams',
        component: TeamsComponent,
      },
      {
        path: 'new-work-request',
        component: NewWorkRequestComponent,
      },
      {
        path: 'new-team',
        component: NewTeamComponent,
      },
      {
        path: 'modify-team/:id',
        component: ModifyTeamComponent,
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
