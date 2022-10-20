import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeDetailComponent,
    CompanyDetailComponent,
    CompanyRegistrationComponent,
    EmployeeRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatSelectModule,
    ToastrModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
