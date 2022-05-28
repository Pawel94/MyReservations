import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/service/student-service.service';

import { HttpErrorResponse } from '@angular/common/http';
import { Student } from 'src/app/service/objects/Student';
@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss'],
})
export class ListOfUsersComponent implements OnInit {
  public listOfStudents?: Student[];
  constructor(private studentService: StudentServiceService) {}

  ngOnInit(): void {
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

//   public getAllStudents() {

// }
