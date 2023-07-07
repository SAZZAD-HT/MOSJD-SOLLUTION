import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingMosque } from '../Entity/Booking.Mosque.Entity';
import { Mosque } from '../Entity/Mosque.entity';
import { Announcemententity } from '../Entity/Announcementen';
import { AnnouncemetDto, annch } from '../Dto/ann.dto';
import { booked } from '../Dto/bookdto';


@Injectable()
export class BookingServices {
  constructor(
    @InjectRepository(BookingMosque)
    private readonly book: Repository<BookingMosque> 
  ) {}

  
  //all
  async Findbooked(): Promise<BookingMosque[]> {
    return await this.book.find();
  }
  //Individual
  async findOne(MBookingId: number): Promise<BookingMosque> {
    return await this.book.findOneBy({MBookingId});

}
async create(booking: BookingMosque): Promise<BookingMosque> {
    return await this.book.save(booking);
}
async ForMosjidApprove(BookingType:string,BookingStatus:string): Promise<BookingMosque[]> {
 var val= await this.book.find({where:[
  
    {BookingStatus: 'PENDING' },
  ],
});
console.log(val);
return val;
}   
async bstauschange(id:number,B:booked): Promise<void> {
   
  await this.book.update(id,B);
}
async BoookingConfirmed(BookingStatus:string): Promise<BookingMosque[]> {
    return await this.book.find({where:[
     
        {BookingStatus: 'CONFIRMED' },
       
    ],
    });}



async delete(MBookingId: number): Promise<void> {
    await this.book.delete(MBookingId);
    
   
}
  }
