import {  Body,  Controller,  Delete,  FileTypeValidator,  Get,  MaxFileSizeValidator,  Param,  ParseFilePipe,  ParseIntPipe,  Patch,  Post,  Put,  Query,  Res,  Session,  UnauthorizedException,  UploadedFile,  UseGuards,  UseInterceptors,  UsePipes,  ValidationPipe,} from '@nestjs/common';
import { AddMosjidDto } from 'src/UserProfile/Dto/add.Mosjid.dto';
import { LoginUserDto } from 'src/UserProfile/Dto/add.user.Dto';
import { Mosque } from 'src/UserProfile/Entity/Mosque.entity';
import { OthersServices } from 'src/UserProfile/Services/Others.Services';
import { MosjidService } from 'src/UserProfile/Services/AddMosjid.service';


@Controller('Mosjid')
export class MosjidController {

   
    constructor(private readonly MosjidService:MosjidService,
         ) {}
    
   

    @Get("")
    async findMosjid(): Promise<Mosque[]> {
      console.log("Controller");
        return await this.MosjidService.mfindAll();
    }
    @Post('/Mosjid/create')
    async createMosjid(@Body() user:  AddMosjidDto): Promise<Mosque> {
        return await this.MosjidService.mcreate(user);
    }
    @Put('/Mosjid/update/:id')
    async updateMosjid(@Param('id', ParseIntPipe) id: number, @Body() user: Mosque): Promise<void> {
        console.log("Controller");
      var dr=  await this.MosjidService.mupdate(id, user);
      return dr;}
    @Delete('/Mosjid/delete/:id')
    async deleteMosjid(@Param('id', ParseIntPipe) id: number): Promise<void> {
       var dr= await this.MosjidService.mdelete(id);
        return dr;
    }
    
//     @Get('/Mosjid/:userId')
//      async getMosqueDataByUserId(@Param('userId') userId: number): Promise<any> {
//      var data=await this.OtherService.getMosqueDataByUserId(userId);
//      return data;
//   }

  }
  


  
 









    
