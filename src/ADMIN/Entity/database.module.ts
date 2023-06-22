import { Module } from '@nestjs/common';
import{TypeOrmModule} from '@nestjs/typeorm';
import { Admin } from './Admin.entity';

@Module({
	imports:[
	TypeOrmModule.forRoot({
      type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'sazzad',
        database: 'Test',
        entities: [Admin],
        synchronize: true,
	}),
	],
})
export class DatabaseModule {}
