
export type Group = string;

export interface Teacher {
  name: string;
  dateOfBirth: Date;
  teachSubject: string;
  workedInUniversity: number;
}

export enum Subject {
  Math='Math',
  Biology='Biology',
  Chemistry='Chemistry',
  History='History',
  Physics='Physics'
}

export interface Classroom {
  number: number;
}

export interface Lesson {
  subject: Subject;
  teacher: Teacher;
  room: Classroom;
  startTime : Date;
  endTime : Date;
  group: Group
}
