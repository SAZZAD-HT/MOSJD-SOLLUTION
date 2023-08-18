import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Mosque } from './Mosque.entity';

@Entity()
export class BookingMosque {
  @PrimaryGeneratedColumn()
  MBookingId: number;
 
  @Column()
  BookingTime: String;
  @Column() 
  BookingDate: String;
  @Column()
  BoookingDuration: String; 
  @Column() 
  Bookedby: String;


  @Column()
  BookingStatus: string;

  @Column()
  BookingType: string;
  @Column()
  BookingBy: string;
  @Column()
  BookingEmail: string;



}
