import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from "./components/login/login.component";
import { ForgotPasswordComponent } from "./components/login/forgot-password.component"
import { ResetPasswordComponent } from "./components/login/reset-password.component"
import { SignUpComponent } from "./components/sign-up/signup.component";
import { SignUpActivateComponent } from "./components/sign-up/signup-activate.component"
import { ClientPortalComponent} from "./components/client-portal/client-portal.component";
import { MenuComponent } from './components/menu/menu.component';
import { PatientsListComponent } from "./components/patient-list/patients-list.component";
import { PatientProfileComponent} from "./components/patient-details/add-edit-patient.component"

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './services/http-interceptor.service'
import { NotificationsManager } from './services/notifications-manager'
import { AuthService } from './auth/auth.service'
import { TokenStorageService } from './auth/token-storage.service'
import { StoreService } from './services/store.service'
import { PatientService } from './services/patient.service'
import { ToothStatusService } from './services/tooth-status.service'
import { MetaDataService } from './services/meta-data.service'
import { MessageService } from 'primeng/api';

import { appRouting } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './store/root-reducer';
import { ExtendedControlComponent } from './components/extended-control.component';
import { ControlErrorsComponent } from './components/control-errors.component';
import { FilterPatientsListPipe } from './components/patient-list/filter.pipe';
import { ToothStatusComponent } from './components/tooth-status/tooth-status.component';
import { ToothActionComponent } from './components/tooth-status/tooth-action.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { PaginatorComponent } from './components/schedule/paginator.component';
import { AppointmentComponent } from './components/schedule/appointment.component';
import { ChoosePatientComponent } from './components/schedule/choose-patient.component'
import { ScheduleService } from './components/schedule/schedule.service'

//prime ng
import {
  ConfirmDialogModule,
  ConfirmationService,
  DropdownModule,
  GrowlModule,
  PanelMenuModule,
} from 'primeng/primeng';

import {ButtonModule} from 'primeng/button';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SignUpComponent,
    SignUpActivateComponent,
    ClientPortalComponent,
    MenuComponent,
    PatientsListComponent,
    PatientProfileComponent,
    ExtendedControlComponent,
    ControlErrorsComponent,
    ToothStatusComponent,
    ToothActionComponent,
    FilterPatientsListPipe,
    ScheduleComponent,
    PaginatorComponent,
    AppointmentComponent,
    ChoosePatientComponent,
  ],
  entryComponents: [
    ChoosePatientComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(rootReducer),
    appRouting,
    //primeng
    ButtonModule,
    ConfirmDialogModule, 
    DropdownModule,
    GrowlModule, 
    TableModule,
    PanelMenuModule,
    SelectButtonModule,
    ToastModule,
    DynamicDialogModule,
    InputTextModule,
  ],
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true },   
    ConfirmationService,
    AuthService,
    TokenStorageService,
    StoreService,
    PatientService,
    ToothStatusService,
    MetaDataService,
    NotificationsManager,
    MessageService,
    ScheduleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
