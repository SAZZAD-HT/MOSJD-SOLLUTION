import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AdminDto { 

    @IsNotEmpty(        { message: 'Name is Emplty' }    )   
    @IsString(        { message: 'Name is not a String' }    )
    

    Name: string;
    @IsNotEmpty(        { message: 'ID is Emplty' }    )  
    @IsNumber(  )
    
    userId: number;
    @IsNotEmpty(        { message: 'Email is Emplty' }    )
    @IsEmail(        { }, { message: 'Email is not a Email' }    )
    email: string; 
    @IsNotEmpty(        { message: 'Password is Emplty' }    )
    password: string;
    @IsNotEmpty(        { message: 'Role is Emplty' }    )
    userRole: string;



}