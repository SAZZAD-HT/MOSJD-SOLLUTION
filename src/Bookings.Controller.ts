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
    
         @Get('/App')
         async getMosjidApprovals(): Promise<BookingMosque[] > {
           console.log('getMosjidApprovals');
             try {
               const booking = await this.Booking.ForMosjidApprove('USER', 'PENDING');
               return booking ;
             } catch (error) {
               // Handle any errors that occurred during the retrieval process
               console.error('Error retrieving mosque approvals:', error);
               return error;
             }
           }
           @Post('/change') // Replace '/status-change' with the actual endpoint path for changing booking status
           async changeBookingStatus(@Body() booked: BookingMosque): Promise<BookingMosque | null> {
             try {
               const updatedBooking = await this.Booking.bstauschange(booked);
               return updatedBooking ;
             } catch (error) {
               // Handle any errors that occurred during the update process
               console.error('Error changing booking status:', error);
               return null;
             }
           }
           @Get('/confirmed') // Replace '/confirmed' with the actual endpoint path for retrieving confirmed bookings
           async getConfirmedBookings(): Promise<BookingMosque | null> {
             try {
               const booking = await this.Booking.BoookingConfirmed('CONFIRMED');
               return booking ;
             } catch (error) {
               // Handle any errors that occurred during the retrieval process
               console.error('Error retrieving confirmed bookings:', error);
               return null;
             }
           }
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
  
  


  
 









    
