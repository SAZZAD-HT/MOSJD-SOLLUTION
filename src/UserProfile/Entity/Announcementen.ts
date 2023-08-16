import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class Announcemententity {
  @PrimaryGeneratedColumn()
  IdAnnouncement: number;   
  @Column()
  Announcement: string;
  @Column()
  AnnouncementDate: string;
  @Column()
  AnnouncemnentStaus: string;
  @Column()
  createdby: string;
 
  
  
}
