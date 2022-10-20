import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyDetailComponent,
  },
  {
    path: 'employee-detail',
    component: EmployeeDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
