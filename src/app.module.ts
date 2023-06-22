import { Module } from '@nestjs/common';
import { AdminController } from './ADMIN/Controller/Admin.Controller';
import { AdminService } from './ADMIN/Services/Admin.Services';
import { UserController } from './User/User.Controller';
import { UserService } from './User/user.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'typeorm';
import { DatabaseModule } from './ADMIN/Entity/database.module';



@Module({

  imports: [DatabaseModule],
  controllers: [AdminController,UserController],
  providers: [AdminService,UserService],
})
export class AppModule {}
