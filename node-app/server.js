const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Newp@ssword1",
    "database": "newExpress"
});

con.connect((err) => {
    if (err) throw (err)
    console.log("MySQL Connected");
})

app.post("/submit-form", (req, res) => {
    let data = {
        uname: req.body.username,
        umail: req.body.email_id,
        umobile: req.body.mob_num
    }
    let sqlInsert = "INSERT INTO userInfo SET ?"
    con.query(sqlInsert, data, (err, result) => {
        if (err) throw err;
        //res.send("Added");
    })
})

app.listen(3001, () => {
    console.log("Sever is running on 3001");
})