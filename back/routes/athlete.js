// routes/sport.js
import express from 'express';
import { getAthlete, createAthlete, deleteAthlete } from '../controllers/athlete.js';

const router = express.Router();

router.get('/athlete', getAthlete);
router.post('/athlete', createAthlete);
router.delete('/athlete/:id', deleteAthlete);

export default router;
