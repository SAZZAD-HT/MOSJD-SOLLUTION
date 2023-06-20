import { Injectable } from '@nestjs/common';
import { AdminDto } from "../Dtos/Admin.dto";
import { Repository } from 'typeorm';
import { Admin } from '../Entity/Admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
  let admin=[];
  const dummyData = [
    {
      Name: "Admin",
      userId: 1,
      email: "sazzadaiub1@gmaol.com",
      password: "123456",
      userRole: "Admin"
    },
    {
      Name: "John Doe",
      userId: 2,
      email: "johndoe@example.com",
      password: "password123",
      userRole: "User"
    },
    {
      Name: "Jane Smith",
      userId: 3,
      email: "janesmith@example.com",
      password: "pass123",
      userRole: "User"
    },
    {
      Name: "Sarah Johnson",
      userId: 4,
      email: "sarahjohnson@example.com",
      password: "qwerty",
      userRole: "Admin"
    },
    {
      Name: "Michael Brown",
      userId: 5,
      email: "michaelbrown@example.com",
      password: "abcdef",
      userRole: "User"
    }
  ];
   ;admin.push(dummyData);
@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private usersRepository: Repository<Admin>,
  ) {}


    getAllAdmins():Promise<Admin[]>{
      
      return this.usersRepository.find();

    }

    createAdmin(adminDto:AdminDto) :Promise<Admin>{
      console.log("Service active");
      return this.usersRepository.save(adminDto);
    }
    getAdminById(id:number): Promise<Admin | null>{
        console.log(id);
        console.log("Service active");
        if(id!=null){
          var  value= admin.find((admin)=>admin.userId==id);
          console.log(value.typeof);

          return this.usersRepository.findOneBy({ id });
        }
    }
    updateAdminById(id:number,adminDto:AdminDto){
       
       console.log("Update Service active");
        var index=admin.findIndex((admin)=>admin.userId==id);
        admin[index]=adminDto;
        return adminDto;
    }

    async  deleteAdminById(id:number): Promise<void>{
        console.log("Delete Service active");
        var index=admin.findIndex((admin)=>admin.userId==id);
        admin.splice(index,1);
        await this.usersRepository.delete(id);
    }

}