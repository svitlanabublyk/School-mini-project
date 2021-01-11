import mysql = require('mysql')
import { DB_HOST } from './config';
import { DB_NAME } from './config';
import { DB_USER } from './config';
import { DB_PASSWORD } from './config';


export default class MySQL{
    private static _instance : MySQL;

    connection : mysql.Connection;
    connected: boolean = false;

    constructor(){
      this.connection = mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
      });
      this.connect();
    }

    public static get instance(){
      return this._instance || (this._instance = new this());
    }

    public static query(query:string, callback: Function){
      this.instance.connection.query(query, (err:Error, results: Object[], fields:[]) => {
        if(err){
          callback(err);
        }
        else if(results.length===0){
          callback('There is no record');
        }
        else{
          callback(null, results);
        }
      })
    }

    public static escape(id:any){
      return this.instance.connection.escape(id);
    }

    private connect(){
      this.connection.connect((err:mysql.MysqlError) => {
        if(err){
          console.log(err.message);
          return;
        }
        this.connected = true;
        console.log('MySQL Connection established!'); 
      })
    }

}