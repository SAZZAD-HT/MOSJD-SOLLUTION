import {  Body,  Controller,  Delete,  FileTypeValidator,  Get,  MaxFileSizeValidator,  Param,  ParseFilePipe,  ParseIntPipe,  Patch,  Post,  Put,  Query,  Res,  Session,  UnauthorizedException,  UploadedFile,  UseGuards,  UseInterceptors,  UsePipes,  ValidationPipe,} from '@nestjs/common';
import { AddMosjidDto } from 'src/UserProfile/Dto/add.Mosjid.dto';
import { LoginUserDto } from 'src/UserProfile/Dto/add.user.Dto';
import { Mosque } from 'src/UserProfile/Entity/Mosque.entity';
import { OthersServices } from 'src/UserProfile/Services/Others.Services';
import { MosjidService } from 'src/UserProfile/Services/AddMosjid.service';
import { BookingServices } from './UserProfile/Services/BookingServices';
import { BookingMosque } from './UserProfile/Entity/Booking.Mosque.Entity';


@Controller('Booking')
export class BookingController {

   
    constructor(private readonly Booking:BookingServices,
         ) {}
    
   
    @Get()
    async findAll(): Promise<BookingMosque[]> {
        return await this.Booking.Findbooked();
    }
    //Individual
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) UserId: number): Promise<BookingMosque> {
        return await this.Booking.findOne( UserId);
    }
    @Post('/create')
    async create(@Body() booking: BookingMosque): Promise<BookingMosque> {
        return await this.Booking.create(booking);
    }
    

  }
  


  
 









    
