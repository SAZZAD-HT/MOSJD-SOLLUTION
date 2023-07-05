import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingMosque } from '../Entity/Booking.Mosque.Entity';
import { Mosque } from '../Entity/Mosque.entity';
import { Announcemententity } from '../Entity/Announcementen';
import { AnnouncemetDto, annch } from '../Dto/ann.dto';


@Injectable()
export class OthersServices {
  constructor(
    @InjectRepository(Mosque)
    private readonly mosqueRepository: Repository<Mosque>
  ) {}

  async getMosqueDataByUserId(userId: number): Promise<any> {
    return this.mosqueRepository
      .createQueryBuilder('mosque')
      .select('mosque.MosqueName', 'MosqueName')
      .addSelect('mosque.Fazar', 'Fazar')
      .addSelect('mosque.Zuhur', 'Zuhur')
      .addSelect('mosque.Asor', 'Asor')
      .addSelect('mosque.Magrib', 'Magrib')
      .addSelect('mosque.Esha', 'Esha')
      .innerJoin('mosque.bookingMosques', 'bookingMosque')
      .innerJoin('bookingMosque.userBookings', 'userBooking')
      .innerJoin('userBooking.user', 'user')
      .where('user.UserId = :userId', { userId })
      .getRawOne();
  }
  
  
}
