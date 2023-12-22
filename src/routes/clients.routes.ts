import { Router, Request, Response } from 'express';
import Client from '../models/client'
import Message from '../models/message';
import Debt from '../models/debt';

const router = Router();

// GET - clients
router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await Client.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.error('Error getting clients:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET - clients/:id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const client = await Client.findByPk(id, {
      include: [Message, Debt]
    },);
    if (client) {
      res.status(200).json(client);
    } else {
      res.status(404).json({ error: `No client with the id ${id}` });
    }
  } catch (error) {
    console.error('Error finding the client:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST - clients
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, rut, salary, savings } = req.body;
    const result = await Client.create({
      name,
      rut,
      salary,
      savings
    });
    const newClient = result.get({ plain: true }) as Client;
    res.status(201).json(newClient);
  } catch (error) {
    console.error('Error creating the client:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET - clients/:id/score
router.get('/:id/score', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const client = await Client.findByPk(id, {
      include:[
      {
        model: Message,
        as: 'messages'
      },
      {
        model: Debt,
        as: 'debts'
      },
    ]
    },);
    if (client) {
      let score = 0;
      // Get Score By Messages: 20%
      // Get Score By SalaryDebt difference: 50%
      // Get Score By Savings Score: 30%
      res.status(200).json({score});
    } else {
      res.status(404).json({ error: `No client with the id ${id}` });
    }
  } catch (error) {
    console.error('Error finding the client:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;