import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Topic } from './Topic';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
    // @ts-ignore
  id: number;

  @Column()
    // @ts-ignore
  user: string;

  @Column()
    // @ts-ignore
  message: string;

  @ManyToOne(() => Topic)
    // @ts-ignore
  topic: Topic;
}
