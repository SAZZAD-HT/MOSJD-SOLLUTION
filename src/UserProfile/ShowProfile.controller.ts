import {  Body,  Controller,  Delete,  FileTypeValidator,  Get,  MaxFileSizeValidator,  Param,  ParseFilePipe,  ParseIntPipe,  Patch,  Post,  Put,  Query,  Res,  Session,  UnauthorizedException,  UploadedFile,  UseGuards,  UseInterceptors,  UsePipes,  ValidationPipe,} from '@nestjs/common';
import { UserService } from './Services/add.User.Service';
import { AddUserDto } from './Dto/add.user.Dto';
import { User } from './Entity/User.entity';
import { OthersServices } from './Services/Others.Services';
import { MosjidService } from './Services/AddMosjid.service';
import {Mosque } from './Entity/Mosque.entity';
import { AddMosjidDto } from './Dto/add.Mosjid.dto';

@Controller('user')
export class UserController {

   
    constructor(private readonly userService: UserService,private readonly OtherServices:OthersServices,private readonly MosjidService:MosjidService
         ) {}
    
    @Get()
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }
    
    // @Get(':id')
    // async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    //     return await this.userService.findOneBy(id);
    // }
    
    @Post('/create')
    async create(@Body() user: AddUserDto): Promise<User> {
        return await this.userService.create(user);
    }


    
    @Put('/update/:id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() user: User): Promise<void> {
        await this.userService.update(id, user);
    }
    
    @Delete('/delete/:id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        await this.userService.delete(id);
    }

    @Get("/Mosjid")
    async findMosjid(): Promise<Mosque[]> {
        return await this.MosjidService.mfindAll();
    }
    @Post('/Mosjid/create')
    async createMosjid(@Body() user:  AddMosjidDto): Promise<Mosque> {
        return await this.MosjidService.mcreate(user);
    }
    @Put('/Mosjid/update/:id')
    async updateMosjid(@Param('id', ParseIntPipe) id: number, @Body() user: Mosque): Promise<void> {
      var dr=  await this.MosjidService.mupdate(id, user);
      return dr;}
    @Delete('/Mosjid/delete/:id')
    async deleteMosjid(@Param('id', ParseIntPipe) id: number): Promise<void> {
       var dr= await this.MosjidService.mdelete(id);
        return dr;
    }
    
    @Get('/Mosjid/:userId')
     async getMosqueDataByUserId(@Param('userId') userId: number): Promise<any> {
     var data=await this.OtherServices.getMosqueDataByUserId(userId);
     return data;
  }









    
}