import {  Body,  Controller,  Delete,  FileTypeValidator,  Get,  MaxFileSizeValidator,  Param,  ParseFilePipe,  ParseIntPipe,  Patch,  Post,  Put,  Query,  Res,  Session,  UnauthorizedException,  UploadedFile,  UseGuards,  UseInterceptors,  UsePipes,  ValidationPipe,} from '@nestjs/common';
import { AddMosjidDto } from 'src/UserProfile/Dto/add.Mosjid.dto';
import { LoginUserDto } from 'src/UserProfile/Dto/add.user.Dto';
import { Mosque } from 'src/UserProfile/Entity/Mosque.entity';
import { OthersServices } from 'src/UserProfile/Services/Others.Services';
import { MosjidService } from 'src/UserProfile/Services/AddMosjid.service';
import { BookingServices } from './UserProfile/Services/BookingServices';
import { BookingMosque } from './UserProfile/Entity/Booking.Mosque.Entity';
import { AnnouncmentService } from './UserProfile/Services/AnnouncmentService';
import { Announcemententity } from './UserProfile/Entity/Announcementen';
import { AnnouncemetDto } from './UserProfile/Dto/ann.dto';


@Controller('Announcement')
export class AnnouncmentController{

    constructor(private readonly ann:AnnouncmentService,
        ) {}
   
        @Get()
        async getAllAnnouncements(): Promise<Announcemententity[]> {
          try {
            const announcements = await this.ann.Allannouncement();
            return announcements;
          } catch (error) {
            // Handle any errors that occurred during the retrieval process
            console.error('Error retrieving announcements:', error);
            return [];
          }
        }
        @Post('/create')
        async createAnnouncement(@Body() announcement: AnnouncemetDto): Promise<Announcemententity | null> {
          try {
            const newAnnouncement = await this.ann.create(announcement);
            return newAnnouncement;
          } catch (error) {
            // Handle any errors that occurred during the creation process
            console.error('Error creating announcement:', error);
            return null;
          }
        }
        @Get('/admin-created-active')
        async getAdminCreatedActiveAnnouncement(): Promise<Announcemententity []> {
          try {
            const announcement = await this.ann.createdbyadmin('ADMIN', 'ACTIVE');
            return announcement ;
          } catch (error) {
            // Handle any errors that occurred during the retrieval process
            console.error('Error retrieving admin-created active announcement:', error);
            return null;
          }
        }
        @Put('/Change-status/:id')
        async updatestatus(@Param('id', ParseIntPipe) id: number, @Body() user: Announcemententity): Promise<void> {
            console.log("Controller");
    
            await this.ann.updateStatus(id, user);
        }
        @Delete('/delete/:id')
        async deleteAnnouncement(@Param('id', ParseIntPipe) id: number): Promise<void> {
          try {
            await this.ann.delete(id);
          } catch (error) {
            // Handle any errors that occurred during the deletion process
            console.error('Error deleting announcement:', error);
          }
        }
      }
      






      
      


