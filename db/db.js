var mysql = require('mysql2');

var con = mysql.createConnection({
  host     : 'ip-10-0-1-158.ec2.internal',
  user     : 'gopichand',
  password : 'Ch@ndu.1234',
  database : 'mydb'
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = con;