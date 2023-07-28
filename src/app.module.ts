import { Module } from '@nestjs/common';

 import{UserController} from './UserProfile/AdminController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'typeorm';

import { DatabaseModulemosque } from './UserProfile/DatabaseConfig/database.Config';
import { UserService } from './UserProfile/Services/add.User.Service';
import { MailerModule } from '@nestjs-modules/mailer';






@Module({

  imports: [DatabaseModulemosque,MailerModule.forRoot({

    transport: {

      port: 465,

      host: 'smtp.gmail.com',

      auth: {

        user: 'sazzadaiub1@gmail.com',

         
        pass: '',

      },

    },

  }),],
  controllers: [],
  providers: [],
})
export class AppModule {}
