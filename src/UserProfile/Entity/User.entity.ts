import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserBookings } from './User.Bookings.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  UserId: number;

  @Column()
  UserName: string;

  @Column()
  UserEmail: string;

  @Column()
  UserPassword: string;

  @Column()
  Contact: string;

  @Column()
  Role: string;

  @Column()
  Status: string;

  @OneToMany(() => UserBookings, userBookings => userBookings.user)
  bookings: UserBookings[];
}
