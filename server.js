const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'zubair',
    password: '$718GmT',
    database: 'studentdb'
});

// connection.connect((err) => {
//     if(err) {
//         console.log('Connection Error!', err);
//     } else {
//         console.log('Connected successfully!');
//     }
// });

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 
    "views"));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    connection.query(`SELECT * FROM students`, (err, result) => {
        if(err) {
            console.log('Reading Error!');
        } else {
            res.render('index', {data: result});
        }
    });
});

app.get('/add_student', (req, res) => {
    res.render('add_student');
});

app.post('/store_student', (req, res) => {
    const body = req.body;
    const name = body.name;
    const age = body.age;
    const phone = body.phone;
    const gender = body.gender;
    const className = body.class;

    connection.query(`INSERT INTO students (name, age, gender, class, phone) VALUES ('${name}', ${age}, '${gender}', '${className}', '${phone}')`, (err, result) => {
        if(err) {
            res.send('Error Occured');
            res.end();
        } else {
            res.redirect('/');
        }
    })


})

app.listen(4000, () => {
    console.log('Server is running...');
});
