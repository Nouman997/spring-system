import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeRegistrationComponent } from '../employee-registration/employee-registration.component';
import { EmplyeeService } from '../service/emplyee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  employeesData: any = [];
  displayedColumns: string[] = ['id', 'name', 'company', 'address', 'action'];

  constructor(
    public dialog: MatDialog,
    public employeeService: EmplyeeService,
    private toastr: ToastrService
  ) {}

  openDialog(id?: number) {
    const dialogRef = this.dialog.open(EmployeeRegistrationComponent, {
      data: { id },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getAllEmployees();
    });
  }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {

      this.employeesData = data.data;
    });
  }

  deleteEmployee(id: number) {
    let confirmation = confirm('Do you want to delete?');
    if (confirmation) {
      this.employeeService.deleteEmployee(id).subscribe(() => {
        this.getAllEmployees();
        this.toastr.error('Employee deleted successfully');
      });
    }
  }
}
