import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/service/student-service.service';
import { Student } from 'src/app/objects/Student';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public listOfStudents?: Student[];

  constructor(
    private studentService: StudentServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.navigate(['createStudent'], { relativeTo: this.route });
  }

  public getAllStudents() {
    this.studentService.getAllEmployee().subscribe(
      (res: Student[]) => {
        this.listOfStudents = res;
      },
      (err: HttpErrorResponse) => {
        alert(err.message);
      }
    );
  }
}
