const express = require('express');
const app = express();
const msql = require('mysql');
const bodyParser = require('body-parser');

const db = msql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'crud-database',
  port: 3306
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/insert', (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;

  const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?, ?);";
  db.query(sqlInsert, [movieName, movieReview], (err, result) => {  
    console.log(result);
  });
});

  app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Inceptionnnn', 'Great movie!');";
    db.query(sqlInsert, (err, result) => {
      res.send('Hello World!fasgsdfgdgdsfgf'); npm
    });
  });

  app.get('/api/insert', (req, res) => {
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Inceptionnnn', 'Great movie!');";
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
      console.log(result);
    });
  });


  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });