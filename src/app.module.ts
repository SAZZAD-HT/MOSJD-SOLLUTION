import { Module } from '@nestjs/common';

 import{UserController} from './UserProfile/AdminController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'typeorm';

import { DatabaseModulemosque } from './UserProfile/DatabaseConfig/database.Config';
import { UserService } from './UserProfile/Services/add.User.Service';






@Module({

  imports: [DatabaseModulemosque],
  controllers: [],
  providers: [],
})
export class AppModule {}
