import type { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Topic } from '../entities/Topic';
import { Message } from '../entities/Message';

export const getTopics = async (_: Request, res: Response) => {
  const topicRepository = getRepository(Topic);
  const topics = await topicRepository.find();

  const formattedTopics = topics.map((topic) => ({
    id: topic.id,
    title: topic.title,
    subtitle: topic.subtitle,
  }));

  res.json(formattedTopics);
};

export const createTopic = async (req: Request, res: Response) => {
  const { title='', subtitle='' } = req.body;

  const topicRepository = getRepository(Topic);
  const topic = new Topic();
  topic.title = title;
  topic.subtitle = subtitle;

  await topicRepository.save(topic);

  res.status(201).json(topic);
};

export const deleteTopic = async (req: Request, res: Response) => {
  const { id } = req.params;

  const topicRepository = getRepository(Topic);
  await topicRepository.delete(id);

  res.sendStatus(204);
};

export const getMessagesByTopic = async (req: Request, res: Response) => {
  const { id } = req.params;

  const messageRepository = getRepository(Message);
  const messages = await messageRepository.find({ where: { topic: { id: Number(id) } } });

  res.json(messages);
};

export const deleteMessage = async (req: Request, res: Response) => {
  const { id } = req.params;

  const messageRepository = getRepository(Message);
  await messageRepository.delete(id);

  res.sendStatus(204);
};

// @ts-ignore
export const createMessage = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { user, message } = req.body;

  const topicRepository = getRepository(Topic);
  const messageRepository = getRepository(Message);

  try {
    // @ts-ignore
    const topic = await topicRepository.findOne({ where: { id: id } });

    if (!topic) {
      return res.status(404).json({ message: 'Topic not found' });
    }

    const newMessage = new Message();
    newMessage.user = user;
    newMessage.message = message;
    newMessage.topic = topic;

    await messageRepository.save(newMessage);

    res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
