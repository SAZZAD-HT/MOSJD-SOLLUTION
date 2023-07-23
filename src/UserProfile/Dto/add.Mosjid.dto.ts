import { IsNotEmpty,IsNumber,MaxLength,MinLength,Length,IsEmail,IsOptional, IsString } from "class-validator";
export class AddMosjidDto { 
    @IsNumber()
    IdMosque: number;
  
    @IsNotEmpty()
    @IsString()
    MosqueName: string;
  
    @IsNotEmpty()
    @IsString()
    MLocation: string;
  
    @IsNotEmpty()
    @IsString()
    city: string;
  
    @IsNotEmpty()
    @IsString()
    Description: string;
  
    @IsNotEmpty()
    @IsString()
    Capacity: string;
  
    @IsNotEmpty()
    @IsString()
    Fazar: string;
  
    @IsNotEmpty()
    @IsString()
    Zuhur: string;
  
    @IsNotEmpty()
    @IsString()
    Asor: string;
  
    @IsNotEmpty()
    @IsString()
    magrib: string;
  
    @IsNotEmpty()
    @IsString()
    esha: string;
  
    @IsNotEmpty()
    @IsString()
    Jummah: string;
  
    @IsNotEmpty()
    @IsString()
    Announcement: string;
    
    
  

}
export class namazdto { 
   
    @IsNumber()
    IdMosque: number;
  
    @IsNotEmpty()
    @IsString()
    Fazar: string;
  
    @IsNotEmpty()
    @IsString()
    Zuhur: string;
  
    @IsNotEmpty()
    @IsString()
    Asor: string;
  
    @IsNotEmpty()
    @IsString()
    magrib: string;
  
    @IsNotEmpty()
    @IsString()
    esha: string;
  
    @IsNotEmpty()
    @IsString()
    Jummah: string;
  

  

}