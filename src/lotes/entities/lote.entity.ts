import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Lote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  state: string;

  @Column()
  area: number;

  @Column('simple-array', { nullable: true })
  adjacentAreas: string[];

  @DeleteDateColumn()
  deletedAt: Date;
}
