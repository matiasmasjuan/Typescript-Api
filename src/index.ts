import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { port } from './config';

import clientsRoutes from './routes/clients.routes';
import messagesRoutes from './routes/messages.routes';
import debtsRoutes from './routes/debts.routes';
import followUpRoutes from './routes/follow-up.routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/clients', clientsRoutes);
app.use('/messages', messagesRoutes);
app.use('/debts', debtsRoutes);
app.use('/clients-to-do-follow-up', followUpRoutes);

app.get('/', async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Typescript Api Lidz'
  });
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`API started at http://localhost:${port}`);
});