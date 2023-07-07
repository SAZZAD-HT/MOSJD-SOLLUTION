import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BookingMosque } from './Booking.Mosque.Entity';

@Entity()
export class Mosque {
  @PrimaryGeneratedColumn()
  IdMosque: number;

  @Column()
  MosqueName: string;

  @Column()
  MLocation: string;

  @Column()
  city: string;

  @Column()
  Description: string;

  @Column()
  Capacity: string;

  @Column()
  Fazar: string;

  @Column()
  Zuhur: string;

  @Column()
  Asor: string;

  @Column()
  magrib: string;

  @Column()
  esha: string;

  @Column()
  Jummah: string;

  @Column()
  Announcement: string;
  @Column()
  DonationId: number;

 
}
