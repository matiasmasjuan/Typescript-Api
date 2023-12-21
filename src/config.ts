import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.join(__dirname, '../.env')
});

export const port = Number(process.env.API_PORT);