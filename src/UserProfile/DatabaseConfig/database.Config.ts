import { Module } from '@nestjs/common';
import{TypeOrmModule} from '@nestjs/typeorm';
import { BookingMosque } from '../Entity/Booking.Mosque.Entity';
import { Mosque } from '../Entity/Mosque.entity';
import { UserBookings } from '../Entity/User.Bookings.entity';
import { User } from '../Entity/User.entity';
import { UserService } from '../Services/add.User.Service';
import { UserController } from '../ShowProfile.controller';
import { OthersServices } from '../Services/Others.Services';
import { MosjidService } from '../Services/AddMosjid.service';
import { MosjidController } from 'src/Mosque/Mosquecntroller';
import { Announcemententity } from '../Entity/Announcementen';


@Module({
	imports:[
	TypeOrmModule.forRoot({
      type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'sazzad',
        database: 'Test',
        entities: [Mosque,User,UserBookings,BookingMosque],
        synchronize: false,
	}),TypeOrmModule.forFeature([BookingMosque,Mosque,User,UserBookings,Announcemententity])
	],
  providers: [UserService,OthersServices,MosjidService],
  controllers: [UserController,MosjidController ]

})
export class DatabaseModulemosque {}
