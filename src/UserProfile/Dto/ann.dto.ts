import { IsNotEmpty,IsNumber,MaxLength,MinLength,Length,IsEmail,IsOptional } from "class-validator";

export class AnnouncemetDto {
  

  IdAnnouncement: number;   

  Announcement: string;

  AnnouncementDate: string;
  
  AnnouncemnentStaus: string;
  createdby: string;
  

  
}
export class annch{
    IdAnnouncement: number; 
    AnnouncemnentStaus: string;


}
