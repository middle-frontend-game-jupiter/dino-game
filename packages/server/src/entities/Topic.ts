import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
    // @ts-ignore
  id: number;

  @Column()
    // @ts-ignore
  title: string;

  @Column()
    // @ts-ignore
  subtitle: string;
}
