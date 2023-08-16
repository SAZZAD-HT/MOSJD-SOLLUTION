import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { AddUserDto } from '../Dto/add.user.Dto';
import { User } from '../Entity/User.entity';
import { namazdto } from '../Dto/add.Mosjid.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
    ) {}
    
    async findAll(): Promise<User[]> {
        var data=await this.userRepo.find();
        return data;
    }
    
    async findOneBy(UserId: number): Promise<User> {
        return await this.userRepo.findOneBy({UserId});
    }
    
    async create(user: AddUserDto): Promise<User> {
        user.UserPassword=await bcrypt.hash(user.UserPassword,10);


        return await this.userRepo.save(user);
    }
    
    async update(id: number, user: User): Promise<void> {
        await this.userRepo.update(id, user);
    }
    
    async delete(id: number): Promise<void> {

        if(!await this.userRepo.findOneBy({UserId:id})){
            throw new NotFoundException('User not found');}
            else{
                await this.userRepo.delete(id);

            }
       
    }

    async findOne(UserId: number): Promise<User> {
        return await this.userRepo.findOneBy({UserId});
    }
    
    async findemail(UserEmail: string): Promise<User> {
        return await this.userRepo.findOneBy({UserEmail});
    }
    async findpassword(UserPassword: string): Promise<User> {
        return await this.userRepo.findOneBy({UserPassword});
    }
    async signin(email: string, password: string) {
        
        
            const user = await this.findemail(email);
            if (!user) {
                console.log("User not found");
                throw new NotFoundException('User not found');
            }const passwordMatch = await bcrypt.compare(password, user.UserPassword);
            if (passwordMatch !) {
                
                console.log("Invalid password");
                throw new BadRequestException('Invalid password');
            }
            if(user.Role=="admin"){
                
                
                console.log("admin");
                return user;
            }else if(user.Role=="user"){
               
    
                console.log("user");
                return user;}
                else if(user.Role=="mosjid"){
               
    
                    console.log("mosjid");
                    return user;}
    
            ;
    
        }
        

    }
