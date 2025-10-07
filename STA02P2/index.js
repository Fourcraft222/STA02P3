const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const read = (file) => JSON.parse(fs.readFileSync(`data/${file}.json`));
const write = (file, data) => fs.writeFileSync(`data/${file}.json`, JSON.stringify(data, null, 2));

/* ==== MOVIES ==== */

// GET /movies - List all movies
app.get('/movies', (req, res) => res.json(read('movies')));

// GET /movies/:id - Get a movie by ID
app.get('/movies/:id', (req, res) => {
  const movie = read('movies').find(m => m.id === req.params.id);
  movie ? res.json(movie) : res.sendStatus(404);
});

// POST /movies - Create a new movie
app.post('/movies', (req, res) => {
  const movies = read('movies');
  const { id, ...rest } = req.body;
  const movieId = id ?? Date.now().toString();   // o uuid()
  const movie = { id: movieId, ...req.body };
  movies.push(movie);
  write('movies', movies);
  res.status(201).json(movie);
});

// PUT /movies/:id  - Update a movie by ID
app.put('/movies/:id', (req, res) => {
  const movies = read('movies');
  const idx = movies.findIndex(m => m.id === req.params.id);
  if (idx === -1) return res.sendStatus(404);
  let {name, year, actors} = req.body;
  if (name === undefined){
    name = movies[idx].name
  }
  if (year === undefined){
    year = movies[idx].year
  }
  if (actors === undefined){
    actors = movies[idx].actors
  }
  movies[idx] = { ...movies[idx], name, year, actors, id: movies[idx].id };
  write('movies', movies);
  res.json(movies[idx]);
});

// DELETE /movies/:id   - Delete a movie by ID
app.delete('/movies/:id', (req, res) => {
  const movies = read('movies');
  const newList = movies.filter(m => m.id !== req.params.id);
  if (newList.length === movies.length) return res.sendStatus(404);
  write('movies', newList);
  res.sendStatus(204);
});

/* ==== ACTORS ==== */

// GET /actors - List all actors
app.get('/actors', (req, res) => res.json(read('actors')));

// GET /actors/:id - Get an actor by ID
app.get('/actors/:id', (req, res) => {
  const actor = read('actors').find(a => a.id === req.params.id);
  actor ? res.json(actor) : res.sendStatus(404);
});

// POST /actors - Create a new actor
app.post('/actors', (req, res) => {
  const actors = read('actors');
  const { id, ...rest } = req.body;
  const actorId = id ?? Date.now().toString();   // o uuid()
  const actor = { id: actorId, ...req.body };
  actors.push(actor);
  write('actors', actors);
  res.status(201).json(actor);
});

// PUT /actors/:id  - Update an actor by ID
app.put('/actors/:id', (req, res) => {
    const actors = read('actors');
    const idx = actors.findIndex(a => a.id === req.params.id);
    let {name, born} = req.body;
    if (idx === -1) return res.sendStatus(404);
    if (name === undefined){
        name = actors[idx].name
    }
    if (born === undefined){
        born = actors[idx].born
    }
    actors[idx] = { ...actors[idx], name, born, id: actors[idx].id };
    write('actors', actors);
    res.json(actors[idx]);
});

// DELETE /actors/:id  - Delete an actor by ID

app.delete('/actors/:id', (req, res) => {
    const actors = read('actors');
    const newList = actors.filter(a => a.id !== req.params.id);
    if (newList.length === actors.length) return res.sendStatus(404);
    write('actors', newList);
    res.sendStatus(204);
});


app.listen(3001, () => console.log('API lista en http://localhost:3001'));
