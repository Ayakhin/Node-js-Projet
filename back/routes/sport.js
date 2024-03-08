// routes/sport.js
import express from 'express';
import { getSport, createSport, deleteSport } from '../controllers/sport.js';

const router = express.Router();

router.get('/sports', getSport);
router.post('/sports', createSport);
router.delete('/sports/:id', deleteSport);

export default router;
