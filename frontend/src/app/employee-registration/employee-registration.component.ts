import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from '../service/company.service';
import { EmplyeeService } from '../service/emplyee.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  employeeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  companies : any = []

  constructor(
    public dialogRef: MatDialogRef<EmployeeRegistrationComponent>,
    public employeeService: EmplyeeService,
    public companyService: CompanyService,
    public router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    if (this.data.id) {
      this.employeeService.getEmployee(this.data.id).subscribe((data) => {
        this.employeeForm.controls['name'].setValue(data.data[0].name);
        this.employeeForm.controls['company'].setValue(data.data[0].company);
        this.employeeForm.controls['address'].setValue(data.data[0].address);
      });
    }
    this.getCompany();

  }

  addEmployee() {

    let employeeDetail = {
      name: this.employeeForm.controls['name'].value as string,
      company: this.employeeForm.controls['company'].value as string,
      address: this.employeeForm.controls['address'].value as string,
    };

    if (this.employeeForm.valid) {
      this.employeeService.registerEmployee(employeeDetail).subscribe((data) => {
        this.closeDialog();
        this.toastr.success('Employee added successfully');
      });
    }
  }

  updateEmployee(id: any) {
    let employeeDetail = {
      name: this.employeeForm.controls['name'].value as string,
      company: this.employeeForm.controls['company'].value as string,
      address: this.employeeForm.controls['address'].value as string
    };
    this.employeeService.updateEmployee(id, employeeDetail).subscribe((data) => {
      this.closeDialog();
      this.toastr.success('Employee updated successfully')
    });
  }

  getCompany(){
    this.companyService.getCompanies().subscribe((company)=>{
      this.companies = company.data
    })
  }
}
