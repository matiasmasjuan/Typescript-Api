import { Router, Request, Response } from 'express';
const router = Router();

// GET - clients
router.get('/', async (req: Request, res: Response) => {
  const result : string[] = [];
  res.status(200).json({ clients: result });
});

// GET - clients/:id
router.get('/:id', async (req: Request, res: Response) => {
  const result : string = '';
  res.status(200).json({ client: result });
});

// POST - clients
router.post('/', async (req: Request, res: Response) => {
  res.status(201).json({ client: {} });
});export default router;