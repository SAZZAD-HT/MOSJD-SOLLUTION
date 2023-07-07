import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class Donationentity {
  @PrimaryGeneratedColumn()

  DonationId: number;   
  @Column()
  Amount: number;
 

  
}
