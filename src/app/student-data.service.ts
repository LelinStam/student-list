import { Injectable } from '@angular/core';
export interface Student {
  namee: string;
  degreeProgram: string;
}
@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor() { }

  students: Student[] = [];

  getStudents() : Student[] {
    return this.students;
  }

  addStudent(s: Student){
    return this.students = [
      ...this.students, s
    ]
  }
}
