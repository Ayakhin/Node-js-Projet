// controllers/athlete.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getAthlete = async (req, res) => {
  const Athlete = await prisma.athlete.findMany();
  res.json(Athlete);
};

const createAthlete = async (req, res) => {
  const { name } = req.body;
  const newAthlete = await prisma.athlete.create({ data: { name } });
  res.json(newAthlete);
};

const deleteAthlete = async (req, res) => {
  const { id } = req.params;
  await prisma.athlete.delete({ where: { id: parseInt(id) } });
  res.json({ success: true });
};

export { getAthlete, createAthlete, deleteAthlete };
