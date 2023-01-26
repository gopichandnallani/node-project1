const connection = require('../db/db');

app.get("/url/:id", (req, res) => {
    var id = req.params.id;
    connection.query(`SELECT * FROM customers WHERE id=${id}`, (err, rows, fields) => {
      if (!err){
        res.send(rows);
      }
      else
      console.log(err);
    })
   });
  
  app.post("/url", (req, res) => {
      console.log("post api called");
      const payload = {
        name: req.body.name,
        address: req.body.address
      };
      connection.query(`INSERT INTO customers (name, address) VALUES ("${payload.name}", "${payload.address}")`, (err, rows, fields) => {
        if (!err) {
          return res.json(rows);
        }
        else {
          console.log(err);
        }
      });
    })
  
  app.put("/:id", (req, res) => {
      let _id = req.params.id;
      const payload = {
        name: req.body.name,
        address: req.body.address
      };
      connection.query(`UPDATE customers SET name = "${payload.name}" , address = "${payload.address}" WHERE id = "${_id}"`, (err, rows, fields) => {
        if (!err) {
          res.send(rows);
        }
        else {
          console.log(err);
        }
      });
    })