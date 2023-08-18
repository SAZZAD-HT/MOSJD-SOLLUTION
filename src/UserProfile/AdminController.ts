import {  Body,  Controller,  Delete,  FileTypeValidator,  Get,  MaxFileSizeValidator,  Param,  ParseFilePipe,  ParseIntPipe,  Patch,  Post,  Put,  Query,  Res,  Session,  UnauthorizedException,  UploadedFile,  UseGuards,  UseInterceptors,  UsePipes,  ValidationPipe,} from '@nestjs/common';
import { UserService } from './Services/add.User.Service';
import { AddUserDto, LoginUserDto } from './Dto/add.user.Dto';
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
    
      @Get(':id')
    async findOne(@Param('id', ParseIntPipe) UserId: number): Promise<User> {
        return await this.userService.findOneBy( UserId);
    }
    
    @Post('/create')
    async create(@Body() user: AddUserDto): Promise<User> {
        console.log("Controller"+user);
        return await this.userService.create(user);
    }


    
    @Put('/update/:id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() user: User): Promise<void> {
        console.log("Controller");

        await this.userService.update(id, user);
    }
    
    @Delete('/delete/:id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        await this.userService.delete(id);

        
    
    }

    @Get("/Mosjid")
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
      }
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
  @Post('/signin')
  async signin(@Body() body: LoginUserDto, @Session() session: any) {
    const user = await this.userService.signin(body. UserEmail, body. UserPassword);

    session.userId =2565 ;
    //console.log(session.userId);
    console.log(user.Role);
    return user;
  }
  


  @Post('/signout')
 logout(@Session() session: any) {
  console.log("logout"+session.userId);
   session.userId = null;
   session.destroy();
   console.log("logout"+session.userId);
   return { message: 'Signout successful' };
 }
 //http://localhost:3002/user/profile
 @Get('/profile')
 async profile(@Session() session: Record<string, any>) {
   if (!session.userId) {
     throw new UnauthorizedException('User is not logged in');
   }
   const user = await this.userService.findOne(session.userId);
   return user + "profile";
 }









    
}