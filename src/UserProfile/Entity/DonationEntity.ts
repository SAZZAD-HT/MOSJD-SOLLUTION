import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class Donationentity {
  @PrimaryGeneratedColumn("identity")

  DonationId: number;   
  @Column()
  Amount: Number;
 

  
}
