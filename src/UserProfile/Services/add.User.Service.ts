import { Injectable } from '@nestjs/common';
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
}