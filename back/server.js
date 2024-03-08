// src/app.js
import express, { Router } from 'express';
import http from 'node:http';
import config from './config.js';
import sport_routeur from './routes/sport.js';
import athlete_routeur from './routes/athlete.js';
import cors from 'cors';

const app = express();
const routeur = Router();
const PORT = process.env.PORT || 3008;

app.use(routeur);

// permet d'accéder à la propriété body de la requête
routeur.use(express.json()); 
routeur.use(express.static('public'));

routeur.use(cors({
    origin: [ 'http://localhost:5173']
}))

// routeur.use(cors());


routeur.use(sport_routeur)
routeur.use(athlete_routeur)

const server = http.createServer(app);

// app.listen(PORT, () => {
//     console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
// });

export default server;
