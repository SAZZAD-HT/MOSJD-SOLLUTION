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
  
  
    
    BookingStatus: string;
  

    BookingType: string;
    BookingBy: string;
    BookingEmail: string;

}

export class booked{
    MBookingId: number;
    BookingStatus: string;

    
}