import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingMosque } from '../Entity/Booking.Mosque.Entity';
import { Mosque } from '../Entity/Mosque.entity';
import { Announcemententity } from '../Entity/Announcementen';
import { AnnouncemetDto, annch } from '../Dto/ann.dto';
import { retry } from 'rxjs';


@Injectable()
export class AnnouncmentService {
  constructor(
    @InjectRepository(Announcemententity)
    private readonly anny: Repository<Announcemententity>
  ) {}


  async createdbyadmin( createdby: string,AnnouncemnentStaus:string): Promise<Announcemententity[]> {
    
    
    
    var data= await this.anny.find({where:[
      {createdby: 'ADMIN'},
      {AnnouncemnentStaus: 'ACTIVE' },
    ],
  });
  return data;
}
async Allannouncement(): Promise<Announcemententity[]>{
  var data=await this.anny.find();
  return data;
}

async updateStatus(id: number, user: annch): Promise<void> {
  await this.anny.update(id, user);
}
async create(announcement: AnnouncemetDto): Promise<Announcemententity> {
  return await this.anny.save(announcement);
}
async delete(id: number): Promise<void> {
  await this.anny.delete(id);
}
  
 
}


