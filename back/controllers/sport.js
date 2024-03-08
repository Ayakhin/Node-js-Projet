// controllers/sport.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getSport = async (req, res) => {
  const sports = await prisma.sport.findMany();
  res.json(sports);
};

const createSport = async (req, res) => {
  const { name } = req.body;
  const newSport = await prisma.sport.create({ data: { name } });
  res.json(newSport);
};

const deleteSport = async (req, res) => {
  const { id } = req.params;
  await prisma.sport.delete({ where: { id: parseInt(id) } });
  res.json({ success: true });
};

export { getSport, createSport, deleteSport };
