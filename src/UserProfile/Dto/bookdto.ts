import { IsNotEmpty,IsNumber,MaxLength,MinLength,Length,IsEmail,IsOptional, IsString } from "class-validator";

export class BookDto{


    @IsNumber()
    MBookingId: number;
    @IsNumber() 
    IdMosque: number;


    BookingTime: String;

    BookingDate: String;

    BoookingDuration: String; 
    Bookedby: String;
  
  
    
    BookingStatus: number;
  

    BookingType: string;
}

export class booked{

    
}