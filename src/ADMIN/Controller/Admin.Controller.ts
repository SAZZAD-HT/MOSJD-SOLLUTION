import { Controller, Get ,Param,Body, Post, Put,Delete} from '@nestjs/common';
import { AdminService } from '../Services/Admin.Services';
import { get } from 'http';
import { Repository } from 'typeorm';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService:AdminService){}
@Get()
getAdmins(){
    return this.adminService.getAllAdmins();
}
@Post("/createadmin")
createAdmin(@Body() body){
    var result= this.adminService.createAdmin(body);
    console.log(result);
        return result
    }
@Get("/getadmin/:id")
getAdminById(@Param('id') id:number){
var result= this.adminService.getAdminById(id);
console.log(result);
    return result
}
@Delete("/deleteadmin/:id")
deleteAdminById(@Param('id') id:number){
    var result= this.adminService.deleteAdminById(id);
    console.log(result);
        return result
    }
@Put("/updateadmin/:id")
updateAdminById(@Param('id') id:number,@Body() body){
    var result= this.adminService.updateAdminById(id,body);
    console.log(result);
        return result
    }





}