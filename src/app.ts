import { printTeacherBySubject } from './utils'
import { printAllTeachers} from './utils'
import { Subject } from './models'


function getTargetMathTeachers(): void {
  printTeacherBySubject(Subject.Math);
}

function getAllTeachers(): void {
  printAllTeachers()
}

getTargetMathTeachers();
getAllTeachers();
