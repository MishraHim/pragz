import mysql from "mysql2";

const connection  = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"pragzz"
});

export default connection.promise();