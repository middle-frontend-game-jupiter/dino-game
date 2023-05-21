import 'reflect-metadata';
import dotenv from 'dotenv';
import cors from 'cors';
import express, { Response } from 'express';
import { createConnection } from 'typeorm';
import { Topic } from './src/entities';
import { Message } from './src/entities';
import {
  getTopics,
  createTopic,
  deleteTopic,
  getMessagesByTopic,
  deleteMessage, createMessage
} from './src/controllers/ForumController'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = Number(process.env.SERVER_PORT) || 3001;

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'POSTGRES_PASSWORD',
  database: 'forum_db',
  entities: [Topic, Message],
  synchronize: true,
}).then(() => {
  app.get('/', (_, res: Response) => {
    res.send('👋 Howdy from the server :)');
  });

  app.get('/topics', getTopics);
  app.post('/topics', createTopic);
  app.delete('/topics/:id', deleteTopic);
  app.get('/topics/:id/messages', getMessagesByTopic);
  app.delete('/messages/:id', deleteMessage);
  app.post('/topics/:id/messages', createMessage);

  app.listen(port, () => {
    console.log(`➜ 🎸 Server is listening on port: ${port}`);
  });
});
