import { Breed } from '../../breeds/entities/breed.entity';
import { User } from '../../users/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Cat {
  // @Column({ primary: true, generated: true })
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne((type) => Breed, (breed) => breed.cats, {
    eager: true, // Para que traiga la raza al hacer un findOne
  })
  breed: Breed;

  @ManyToOne((type) => User)
  @JoinColumn({ name: 'userEmail', referencedColumnName: 'email' })
  user: User;

  @Column()
  userEmail: string;
}
