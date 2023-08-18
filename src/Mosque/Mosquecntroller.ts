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
    @Post('/create')
    async createMosjid(@Body() user:  AddMosjidDto) {
        return await this.MosjidService.mcreate(user);
    }
    @Put('/Mosjid/update/:id')
    async updateMosjid(@Param('id', ParseIntPipe) id: number, @Body() user: Mosque) {
        console.log("Controller");
      var dr=  await this.MosjidService.mupdate(id, user);
      }
    @Delete('/delete/:id')
    async deleteMosjid(@Param('id', ParseIntPipe) id: number) {
       var dr= await this.MosjidService.mdelete(id);
      
    }
    
    @Get('/:userId')
     async getMosqueDataByUserId(@Param('userId') userId: number) {
     var data=await this.MosjidService.findOne(userId);
     return data;
  }
  @Post('/setnamazTime/:id')
  async setnamazTime(@Param('id', ParseIntPipe) id: number, @Body() user: Mosque) {
      console.log("Controller");
    var dr=  await this.MosjidService.mupdate(id, user);

  }

  }
  


  
 









    
