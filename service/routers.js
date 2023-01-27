const express = require("express");
const router = express.Router();
const db = require("../db/db")

router.get("/:id", (req, res) => {
  var _id = req.params.id
  db.query(`SELECT * FROM customers WHERE id = ${_id}`, (err, rows, fields) => {
    if (!err){
      res.json(rows);
    }
    else
    console.log(err);
  })
});

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
      LastName: req.body.lastname,
      FirstName: req.body.firstname,
      Address: req.body.address,
      City: req.body.city
    };
    db.query(`INSERT INTO customers (LastName, FirstName, Address, City) VALUES ("${payload.LastName}", "${payload.FirstName}", "${payload.Address}", "${payload.City}")`, (err, rows, fields) => {
      if (!err) {
        return res.json(rows);
      }
      else {
        console.log(err);
      }
    });
  })

router.put("/:id", (req, res) => {
    let _id = req.params.id;
    const payload = {
      LastName: req.body.lastname,
      FirstName: req.body.firstname,
      Address: req.body.address,
      City: req.body.city
    };
    db.query(`UPDATE customers SET LastName = "${payload.LastName}" , FirstName = "${payload.FirstName}", Address = "${payload.Address}", City = "${payload.City}" WHERE id = "${_id}"`, (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      }
      else {
        console.log(err);
      }
    });
  })

router.delete("/:id", (req,res) => {
  var _id= req.params.id;
  db.query(`DELETE FROM customers WHERE  id = ${_id}`, (err, rows, result, fields) => {
    if (!err) {
      res.json(rows);
    }
    else {
      console.log(err);
    }
  });
})


module.exports = router;
