import { Module } from '@nestjs/common';
import { AdminController } from './ADMIN/Controller/Admin.Controller';
import { AdminService } from './ADMIN/Services/Admin.Services';
import { UserController } from './User/User.Controller';
import { UserService } from './User/user.services';



@Module({
  imports: [],
  controllers: [AdminController,UserController],
  providers: [AdminService,UserService],
})
export class AppModule {}
