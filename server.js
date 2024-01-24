const express = require('express');
const mysql = require('mysql2');
const PORT = 3333;

const app = express();

const api_routes = require('./routes/api_routes');



// db.query('INSERT INTO users(username, email, password) VALUES ("nv", "nv@test.com", "pasword123")', (err, results) => {
//   if (err) return console.log(err);
//   console.log(results);
// });

// db.query('SELECT * FROM users', (err, results) => {
//   if (err) return console.log(err);

//   console.log(results);
// });


// Opening up the middleware channel to allow json to be sent through from the client
app.use(express.json());

//Share or create a GET toute for every file in the public folder
app.use(express.static('./public'));

// Loud routes
app.use('/api', api_routes);



app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});
