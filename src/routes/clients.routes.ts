import { Router, Request, Response } from 'express';
import Client, { ClientMap } from '../models/client';
import database from '../db/database';

const router = Router();
ClientMap(database);

// GET - clients
router.get('/', async (req: Request, res: Response) => {
  const result = await Client.findAll();
  res.status(200).json(result);
});

// GET - clients/:id
router.get('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await Client.findByPk(id);
  res.status(200).json(result);
});

// POST - clients
router.post('/', async (req: Request, res: Response) => {
  const { name, rut, salary, savings } = req.body;
  const result = await Client.create({
    name,
    rut,
    salary,
    savings
  });
  const newClient = result.get({ plain: true }) as Client;
  res.status(201).json(newClient);
});

export default router;