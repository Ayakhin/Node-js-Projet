// routes/sport.js
import express from 'express';
import { getSport, createSport, deleteSport, putSport } from '../controllers/sport.js';

const router = express.Router();

router.get('/sports', getSport);
router.post('/sports', createSport);
router.delete('/sports/:id', deleteSport);
router.put('/sports/:id', putSport);

export default router;
