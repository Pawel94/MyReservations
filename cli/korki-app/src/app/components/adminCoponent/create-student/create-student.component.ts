import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss'],
})
export class CreateStudentComponent implements OnInit {
  constructor(private studentService: StudentServiceService) {}

  ngOnInit(): void {}
  //TO DO
  public addStudent() {
    this.studentService
      .getAllEmployee()
      .subscribe
      // (res: Student[]) => {
      //   this.listOfStudents = res;
      // },
      // (err: HttpErrorResponse) => {
      //   alert(err.message);
      // }
      ();
  }
}
