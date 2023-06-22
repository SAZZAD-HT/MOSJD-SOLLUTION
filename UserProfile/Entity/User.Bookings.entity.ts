import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User.entity';

@Entity()
export class UserBookings {
  @PrimaryGeneratedColumn()
  BookId: number;

  @ManyToOne(() => User, user => user.bookings)
  user: User;

  @Column()
  BookingTime: Date;

  @Column()
  BookingStatus: number;

  @Column()
  BookingType: string;


}
