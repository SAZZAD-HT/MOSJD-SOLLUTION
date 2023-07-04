import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { AddUserDto } from '../Dto/add.user.Dto';
import { User } from '../Entity/User.entity';

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
    
    // async findOne(UserId: number): Promise<User> {
    //     return await this.userRepository.findOneBy(UserId);
    // }
    
    async create(user: AddUserDto): Promise<User> {
        return await this.userRepo.save(user);
    }
    
    async update(id: number, user: User): Promise<void> {
        await this.userRepo.update(id, user);
    }
    
    async delete(id: number): Promise<void> {
        await this.userRepo.delete(id);
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
        }
        if (user.UserPassword !== password) {
            console.log("Invalid password");
            throw new BadRequestException('Invalid password');
        }

        return user;

    }
}