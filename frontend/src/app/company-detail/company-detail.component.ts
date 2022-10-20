import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompanyRegistrationComponent } from '../company-registration/company-registration.component';
import { CompanyService } from '../service/company.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  companiesData: any = []
  displayedColumns: string[] = ['id', 'name', 'address', 'employees', 'action'];

  constructor(public dialog: MatDialog, public companyService: CompanyService, private toastr: ToastrService) {}

  openDialog(id?: number) {
    const dialogRef = this.dialog.open(CompanyRegistrationComponent,
      {
        data: {id}
      }    
      );

    dialogRef.afterClosed().subscribe(result => {  
      this.getAllCompanies();
    });
  }

  ngOnInit(): void {
    this.getAllCompanies();
  }


  getAllCompanies() {
    this.companyService.getCompanies().subscribe((data) => {
      this.companiesData = data.data
    })
  }

  deleteCompany(id:number) {
    let confirmation = confirm('Do you want to delete?')
    if (confirmation) {
      this.companyService.deleteCompany(id).subscribe(() => {
        this.getAllCompanies();
        this.toastr.error('Company deleted successfully')
      });
    }
  }
}
