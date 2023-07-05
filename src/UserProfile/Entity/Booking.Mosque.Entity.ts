import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Mosque } from './Mosque.entity';

@Entity()
export class BookingMosque {
  @PrimaryGeneratedColumn()
  MBookingId: number;
 

  @ManyToOne(() => Mosque, mosque => mosque.bookings)
  mosque: Mosque;

  @Column()
  BookingTime: String;
  @Column() 
  BookingDate: String;
  @Column()
  BoookingDuration: String; 
  @Column() 
Bookedby: String;


  @Column()
  BookingStatus: number;

  @Column()
  BookingType: string;


}
