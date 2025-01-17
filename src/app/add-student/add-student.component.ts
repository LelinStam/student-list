import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { StudentDataService, Student } from '../student-data.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(
    private location: Location
    , private studentSvc: StudentDataService
    ) { }

  ngOnInit(): void {
  }

  studentName="";

  addStudent() {
    this.studentSvc.addStudent({
      name: this.studentName
      , degreeProgram: "Unknown"
    });

    this.location.back();
  }

}
