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
import { MatCardModule } from '@angular/material/card';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MyIncidentsComponent } from 'src/app/modules/my-incidents/my-incidents.component';
import { NewIncidentComponent } from 'src/app/modules/new-incident/new-incident.component';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicInformationComponent } from 'src/app/modules/incidentposts/basic-information/basic-information.component';
import { DevicesComponent } from 'src/app/modules/incidentposts/devices/devices.component';
import { ResolutionComponent } from 'src/app/modules/incidentposts/resolution/resolution.component';
import { CallsComponent } from 'src/app/modules/incidentposts/calls/calls.component';
import { MatSelectModule } from '@angular/material/select';
import { AgmCoreModule } from '@agm/core';
import { MatSortModule } from '@angular/material/sort';
import { NgxPaginationModule } from 'ngx-pagination';
import { SafetydocumentsComponent } from 'src/app/modules/safetydocuments/safetydocuments.component';
import { HistoryComponent } from 'src/app/modules/safetycompinf/history/history.component';
import { MultimediaComponent } from 'src/app/modules/safetycompinf/multimedia/multimedia.component';
import { InstructionsComponent } from 'src/app/modules/safetycompinf/instructions/instructions.component';
import { NewsafetydocumentComponent } from 'src/app/modules/newsafetydocument/newsafetydocument.component';
import { BscinformationComponent } from 'src/app/modules/safetycompinf/bscinformation/bscinformation.component';
import { ChecklistComponent } from 'src/app/modules/safetycompinf/checklist/checklist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import { ToastrModule } from 'ngx-toastr';
import { ElementiMrezeComponent } from 'src/app/modules/elMreze/elementi-mreze/elementi-mreze.component';
import { DodajElementMrezeComponent } from 'src/app/modules/elMreze/noviEl/dodaj-element-mreze/dodaj-element-mreze.component';



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
    SafetydocumentsComponent,
    BscinformationComponent,
    HistoryComponent,
    MultimediaComponent,
    InstructionsComponent,
    NewsafetydocumentComponent,
    ChecklistComponent,
    ElementiMrezeComponent,
    DodajElementMrezeComponent,
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    NgbModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSortModule,
    NgxPaginationModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGogLjzAuxXfkXYupVuzPfWklpTU2lBIE',
    }),
  ],

  providers: [DashboardService],
})
export class DefaultModule {}
