
import { Subject } from './models'
import MySQL from './db';

export function printTeacherBySubject(subj: Subject): Object[] {
  const query = `SELECT * FROM Teachers WHERE Subject=${MySQL.escape(subj)}`
  let res: Object[];
  MySQL.query(query, (err:Error, results:Object[]) => {
    if(err){
      console.log('error reqesting data');
    } else {
      console.log(results)
      res = results;
    }
  });
  return res;
}

export function printAllTeachers(): Object[]{
  const query = `SELECT * FROM Teachers`
  let res: Object[];
  MySQL.query(query, (err:Error, results:Object[]) => {
    if(err){
      console.log('error reqesting data');
    } else {
      console.log(results)
      res = results;
    }
  });
  return res;
}
