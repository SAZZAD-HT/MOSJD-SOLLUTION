import {  Body,  Controller,  Delete,  FileTypeValidator,  Get,  MaxFileSizeValidator,  Param,  ParseFilePipe,  ParseIntPipe,  Patch,  Post,  Put,  Query,  Res,  Session,  UnauthorizedException,  UploadedFile,  UseGuards,  UseInterceptors,  UsePipes,  ValidationPipe,} from '@nestjs/common';
import { DonationService } from './UserProfile/Services/Donation.service';
import { DonationDto } from './UserProfile/Dto/donation.dto';
import { Donationentity } from './UserProfile/Entity/DonationEntity';



@Controller('Donation')
export class DonationController {

   
    constructor(private readonly Donation:DonationService,
         ) {}
    

      
    @Get()
    async findAll(): Promise<Donationentity[]> {
        var data=await this.Donation.AllDonation();
        return data;
    }
    //Individual
    @Get('/:id')
    async findOne(@Param('id', ParseIntPipe) DonationId: number): Promise<Donationentity> {
        return await this.Donation.findOne(DonationId);
    }
    @Post('/DonateNow')
    async create(@Body() Donation: DonationDto) {
        console.log(Donation);
        return await this.Donation.DonateNow(Donation);
    }
    @Put('/update/:id')
    async update(@Param('id', ParseIntPipe) DonationId: number, @Body() Donation: DonationDto): Promise<void> {
        await this.Donation. update(DonationId, Donation);
    }

    
    }
  
  


  
 









    
