import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingMosque } from '../Entity/Booking.Mosque.Entity';
import { Mosque } from '../Entity/Mosque.entity';
import { Announcemententity } from '../Entity/Announcementen';
import { AnnouncemetDto, annch } from '../Dto/ann.dto';


@Injectable()
export class BookingServices {
  constructor(
    @InjectRepository(Mosque)
    private readonly book: Repository<BookingMosque> 
  ) {}

  
  
  async Findbooked(): Promise<BookingMosque[]> {
    return await this.book.find();
  }
  async findOne(MBookingId: number): Promise<BookingMosque> {
    return await this.book.findOneBy({MBookingId});
}
}
