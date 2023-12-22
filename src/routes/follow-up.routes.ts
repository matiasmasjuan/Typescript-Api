import { Router, Request, Response } from 'express';
import { Op } from 'sequelize';
import Client from '../models/client'
import Message from '../models/message';

const router = Router();


// GET - clients-to-do-follow-up
router.get('/', async (req: Request, res: Response) => {
  try {
    const sevenDaysAgo = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000);

    const clientsToDoFollowUp = await Client.findAll({
      include: {
        model: Message,
        attributes: ['sentAt'],
        order: [['sentAt', 'DESC']],
        limit: 1,
        where: {
          role: 'client',
          sentAt: {
            [Op.lt]: sevenDaysAgo,
          },
        },
      },
    });
    res.status(200).json(clientsToDoFollowUp);
  } catch (error) {
    console.error('Error getting clients with no follow-up:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
