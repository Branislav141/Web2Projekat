import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { DashboardService } from 'src/app/modules/dashboard.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'
import { MyIncidentsComponent } from 'src/app/modules/my-incidents/my-incidents.component';
import { NewIncidentComponent } from 'src/app/modules/new-incident/new-incident.component';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicInformationComponent } from 'src/app/modules/incidentposts/basic-information/basic-information.component';
import { DevicesComponent } from 'src/app/modules/incidentposts/devices/devices.component';
import { ResolutionComponent } from 'src/app/modules/incidentposts/resolution/resolution.component';
import { CallsComponent } from 'src/app/modules/incidentposts/calls/calls.component';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    MyIncidentsComponent,
    NewIncidentComponent,
    BasicInformationComponent,
    DevicesComponent,
    ResolutionComponent,
    CallsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatSelectModule
   
  ],
  providers:[
    DashboardService
  ]
})
export class DefaultModule { }
