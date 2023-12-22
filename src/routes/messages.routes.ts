import { Router, Request, Response } from 'express';
import Message from '../models/message';

const router = Router();

// GET - messages
router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await Message.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.error('Error getting messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET - messages/:id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const message = await Message.findByPk(id);
    if (message) {
      res.status(200).json(message);
    } else {
      res.status(404).json({ error: `No message with the id ${id}` });
    }
  } catch (error) {
    console.error('Error finding the message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
