import { Module } from '@nestjs/common';
import{TypeOrmModule} from '@nestjs/typeorm';
import { BookingMosque } from '../Entity/Booking.Mosque.Entity';
import { Mosque } from '../Entity/Mosque.entity';
import { UserBookings } from '../Entity/User.Bookings.entity';
import { User } from '../Entity/User.entity';
import { UserService } from '../Services/add.User.Service';
import { UserController } from '../AdminController';
import { OthersServices } from '../Services/Others.Services';
import { MosjidService } from '../Services/AddMosjid.service';
import { MosjidController } from 'src/Mosque/Mosquecntroller';
import { Announcemententity } from '../Entity/Announcementen';
import { BookingServices } from '../Services/BookingServices';
import { AnnouncmentService } from '../Services/AnnouncmentService';
import { BookingController } from 'src/Bookings.Controller';
import { AnnouncmentController } from 'src/Announcement.controller';
import { Donationentity } from '../Entity/DonationEntity';


@Module({
	imports:[
	TypeOrmModule.forRoot({
      type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'sazzad',
        database: 'islam',
        //entities: [Mosque,User,UserBookings,BookingMosque,Announcemententity],
        autoLoadEntities: true,
        synchronize: false,
	}),TypeOrmModule.forFeature([BookingMosque,Mosque,User,UserBookings,Announcemententity,Donationentity])
	],
  providers: [UserService,OthersServices,MosjidService,BookingServices,AnnouncmentService],
  controllers: [UserController,MosjidController,BookingController,AnnouncmentController ]

  
})
export class DatabaseModulemosque {}
