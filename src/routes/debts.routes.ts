import { Router, Request, Response } from 'express';
import Debt from '../models/debt';

const router = Router();

// GET - debts
router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await Debt.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.error('Error getting debts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET - debts/:id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const debt = await Debt.findByPk(id);
    if (debt) {
      res.status(200).json(debt);
    } else {
      res.status(404).json({ error: `No debt with the id ${id}` });
    }
  } catch (error) {
    console.error('Error finding the debt:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
