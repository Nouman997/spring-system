import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CompanyService } from '../service/company.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css'],
})
export class CompanyRegistrationComponent implements OnInit {
  companyForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  companies:any = [];

  constructor(
    public dialogRef: MatDialogRef<CompanyRegistrationComponent>,
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
      this.companyService.getCompany(this.data.id).subscribe((data) => {
        this.companyForm.controls['name'].setValue(data.data[0].name);
        this.companyForm.controls['address'].setValue(data.data[0].address);
      });
    }
    this.getCompany()
  }

  addCompany() {
    let companyDetail = {
      name: this.companyForm.controls['name'].value as string,
      address: this.companyForm.controls['address'].value as string,
    };
    
    let companyCheck = this.companies.filter((company:any) => company.name == companyDetail.name)
    
    if (companyCheck.length != 0) {
       this.toastr.error('Company already exist');
       return;
    }
    if (this.companyForm.valid) {
      this.companyService.registerCompany(companyDetail).subscribe((data) => {
        this.closeDialog();
        this.toastr.success('Company added successfully');
      });
    }
  }

  updateCompany(id: any) {
    let companyDetail = {
      name: this.companyForm.controls['name'].value as string,
      address: this.companyForm.controls['address'].value as string,
    };
    this.companyService.updateCompany(id, companyDetail).subscribe((data) => {
      this.closeDialog();
      this.toastr.success('Company updated successfully')
    });
  }

  getCompany(){
    this.companyService.getCompanies().subscribe((company)=>{
      this.companies = company.data
    })
  }
}
