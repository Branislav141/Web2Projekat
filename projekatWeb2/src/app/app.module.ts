import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PocetnaStranicaComponent } from './components/pocetna-stranica/pocetna-stranica.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { RegisterComponent } from './components/register/register.component';
import {SharedModule} from "./shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import { ProfileComponent } from './components/profile/profile.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { WorkRequestsComponent } from './modules/work-requests/work-requests.component';
import { NewRequestComponent } from './modules/work-requests/new-request/new-request.component';
import { BasicInformationComponent } from './modules/work-requests/new-request/basic-information/basic-information.component';
import { ChangeHistoryComponent } from './modules/work-requests/new-request/change-history/change-history.component';
import { MultimediaAttachmentsComponent } from './modules/work-requests/new-request/multimedia-attachments/multimedia-attachments.component';
import { EquipmentComponent } from './modules/work-requests/new-request/equipment/equipment.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    PocetnaStranicaComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminPanelComponent,
    WorkRequestsComponent,
    NewRequestComponent,
    BasicInformationComponent,
    ChangeHistoryComponent,
    MultimediaAttachmentsComponent,
    EquipmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    SharedModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
