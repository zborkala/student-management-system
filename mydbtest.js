const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'zubair',
    password: '$718GmT',
    database: 'studentdb'
});

connection.connect((err) => {
    if(err) {
        console.log('Connection Error!');
    } else {
        console.log('Connection successful!');
    }
});

// INSERT/Create Operation
// connection.query(`INSERT INTO students (name, class, age, gender, phone) VALUES ('Althaf', 'VII', 13, 'Male', '87363553663')`, (err, result) => {
//     if(err) {
//         console.log('Data insertion error!', err);
//     } else {
//         console.log('Data has been inserted successfully!');
//     }
// });

// Update Operation
// connection.query(`UPDATE students SET name = 'Badruddeen', class = 'SSLC' WHERE id = 2`, (err, result) => {
//     if(err) {
//         console.log('Update Error!', err);
//     } else {
//         console.log('Data has been updated successfully!');
//     }
// });

// Delete Operation
// connection.query(`DELETE FROM students WHERE id = 1`, (err, result) => {
//     if(err) {
//         console.log('Delete Error!', err);
//     } else {
//         console.log('Data deleted successfully!');
//     }
// });

// Read Operation
// connection.query(`SELECT * FROM students`, (err, result) => {
//     if(err) {
//         console.log('Error fetching data', err);
//     } else {
//         console.log(result[0].id);
//         console.log(result[0].name);
//         console.log(result[0].age);
//     }
// })
