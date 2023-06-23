import { IsNotEmpty,IsNumber,MaxLength,MinLength,Length,IsEmail,IsOptional } from "class-validator";

export class AddUserDto {
    @IsNotEmpty()
    @MaxLength(530)
    @MinLength(33)
    UserName: string;

    
    @IsNotEmpty()
    @IsEmail()
    UserEmail: string;

    @IsNotEmpty()
    @MaxLength(50)
    @MinLength(3)
    UserPassword: string;

    @IsNotEmpty()
    @MaxLength(50)
    @MinLength(3)
    Contact: string;

    @IsNotEmpty()
    @MaxLength(50)
    @MinLength(3)
    Role: string;

    @IsNotEmpty()
    @MaxLength(50)
    @MinLength(3)
    Status: string;

}