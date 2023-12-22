import { Router, Request, Response } from 'express';
import Message, { MessageMap } from '../models/message';
import database from '../db/database';

const router = Router();
MessageMap(database);

// GET - messages
router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await Message.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.error('Error getting clients:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET - messages/:id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const client = await Message.findByPk(id);
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

export default router;