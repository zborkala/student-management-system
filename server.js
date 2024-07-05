const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'zubair',
    password: '$718GmT',
    database: 'studentdb'
});

connection.connect((err) => {
    if(err) {
        console.log('Connection Error!', err);
    } else {
        console.log('Connected successfully!');
    }
});

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 
    "views"));

app.use(express.static(path.join(__dirname, 'public')))

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
    
});

app.listen(4000, () => {
    console.log('Server is running...');
});
