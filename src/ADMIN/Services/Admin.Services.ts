import { Injectable } from '@nestjs/common';
import { AdminDto } from "../Dtos/Admin.dto";
import { Repository } from 'typeorm';
import { Admin } from '../Entity/Admin.entity';
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
    


    getAllAdmins(){
      
        return admin;

    }

    createAdmin(adminDto:AdminDto){
        admin.push(adminDto);
        return adminDto;
    }
    getAdminById(id:number){
        console.log(id);
        console.log("Service active");
        if(id!=null){
          var  value= admin.findIndex((admin)=>admin.userId===id);
          admin[value]=AdminDto;
          
         

            return value;
        }
    }
    updateAdminById(id:number,adminDto:AdminDto){
       
       console.log("Update Service active");
        var index=admin.findIndex((admin)=>admin.userId==id);
        admin[index]=adminDto;
        return adminDto;
    }

    deleteAdminById(id:number){
        console.log("Delete Service active");
        var index=admin.findIndex((admin)=>admin.userId==id);
        admin.splice(index,1);
        return admin;
    }

}