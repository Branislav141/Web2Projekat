import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PocetnaStranicaComponent } from './components/pocetna-stranica/pocetna-stranica.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from './shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { WorkRequestsComponent } from './modules/work-requests/work-requests.component';
import { WorkRequestComponent } from './modules/work-requests/work-request/work-request.component';
import { BasicInformationComponent } from './modules/work-requests/work-request/basic-information/basic-information.component';
import { ChangeHistoryComponent } from './modules/work-requests/work-request/change-history/change-history.component';
import { MultimediaAttachmentsComponent } from './modules/work-requests/work-request/multimedia-attachments/multimedia-attachments.component';
import { EquipmentComponent } from './modules/work-requests/work-request/equipment/equipment.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/noauth.guard';
import { AdminGuard } from './guards/admin.guard';
import { MaterialModule } from './modules/angular-material/material.module';
import { TeamsComponent } from './modules/teams/teams.component';
import { NewTeamComponent } from './modules/teams/new-team/new-team.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModifyTeamComponent } from './modules/teams/modify-team/modify-team.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NewWorkRequestComponent } from './modules/work-requests/new-work-request/new-work-request.component';
import { PhotoTileComponent } from './modules/work-requests/work-request/multimedia-attachments/photo-tile/photo-tile.component';
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    PocetnaStranicaComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminPanelComponent,
    WorkRequestsComponent,
    WorkRequestComponent,
    BasicInformationComponent,
    ChangeHistoryComponent,
    MultimediaAttachmentsComponent,
    EquipmentComponent,
    TeamsComponent,
    NewTeamComponent,
    ModifyTeamComponent,
    NewWorkRequestComponent,
    PhotoTileComponent,
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    DefaultModule,
    SharedModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatListModule,
    NgbModule,
    FileUploadModule,
    FormsModule,
    MaterialModule,
    MatCheckboxModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [AuthGuard, NoAuthGuard, AdminGuard, NewTeamComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
