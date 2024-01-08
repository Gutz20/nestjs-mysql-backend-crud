import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  dni: string;

  @Column()
  phone: string;

  @Column()
  message: string;

  @Column()
  terms: boolean;

  @Column()
  promotions: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
