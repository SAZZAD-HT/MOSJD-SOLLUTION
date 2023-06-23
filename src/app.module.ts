import { Module } from '@nestjs/common';
import { AdminController } from './ADMIN/Controller/Admin.Controller';
import { AdminService } from './ADMIN/Services/Admin.Services';
 import{UserController} from './UserProfile/ShowProfile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'typeorm';
import { DatabaseModule } from './ADMIN/Entity/database.module';
import { DatabaseModulemosque } from './UserProfile/DatabaseConfig/database.Config';
import { UserService } from './UserProfile/Services/add.User.Service';






@Module({

  imports: [DatabaseModulemosque],
  controllers: [],
  providers: [AdminService],
})
export class AppModule {}
