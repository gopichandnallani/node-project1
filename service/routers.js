const express = require("express");
const router = express.Router();
const db = require("../db/db")

router.get("/", (req, res) => {
    db.query(`SELECT * FROM customers `, (err, rows, fields) => {
      if (!err){
        res.json(rows);
      }
      else
      console.log(err);
    })
});

router.post("/", (req, res) => {
    console.log("post api called");
    const payload = {
      name: req.body.name,
      address: req.body.address
    };
    db.query(`INSERT INTO customers (name, address) VALUES ("${payload.name}", "${payload.address}")`, (err, rows, fields) => {
      if (!err) {
        return res.json(rows);
      }
      else {
        console.log(err);
      }
    });
  })

router.put("/url/:id", (req, res) => {
    let _id = req.params.id;
    const payload = {
      name: req.body.name,
      address: req.body.address
    };
    db.query(`UPDATE customers SET name = "${payload.name}" , address = "${payload.address}" WHERE id = "${_id}"`, (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      }
      else {
        console.log(err);
      }
    });
  })


module.exports = router;
