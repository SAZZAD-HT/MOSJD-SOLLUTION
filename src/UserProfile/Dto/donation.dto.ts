import { IsEmail, IsNumber, MaxLength, MinLength } from 'class-validator';


export class DonationDto {
    @IsNumber()
    DonationId: number;   
    @IsNumber()
    Amount: string;
    MosqueName: string;
}