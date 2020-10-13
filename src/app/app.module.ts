import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './patient/details/details.component';
import { ListComponent } from './patient/list/list.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { FooterComponent } from './footer/footer.component';
import { ActionComponent } from './action/action.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    DetailsComponent,
    ListComponent,
    LoginComponent,
    PatientComponent,
    FooterComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AgGridModule.withComponents([])

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ],

  entryComponents: [
   ActionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
