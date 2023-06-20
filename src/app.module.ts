import { Module } from '@nestjs/common';
import { AdminController } from './ADMIN/Controller/Admin.Controller';
import { AdminService } from './ADMIN/Services/Admin.Services';
import { UserController } from './User/User.Controller';
import { UserService } from './User/user.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'typeorm';


@Module({

  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sazzad',
      database: 'Test',
      entities: [Admin],
      synchronize: true,
    }),],
  controllers: [AdminController,UserController],
  providers: [AdminService,UserService],
})
export class AppModule {}
