
import { Controller, Get,Post,Body,Param} from '@nestjs/common';
import { UserDto } from './User.dto';
import { UserService } from './user.services';
let User=[];
var dem={
    name:"sazzad",
    id:1,
    email:"saa"
 };
 User.push(dem);

@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get('user')
  getUsers() {
    return User;
  }


  @Post('add')
  addUser(@Body() create:UserDto ){
    User.push(create);
    return 'user added';
  }
  @Get('user/:name')
  getuser(@Param('name')name:string)
  {
    return User.find((User)=>User.name===name);
  }


}