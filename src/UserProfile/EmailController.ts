import {  Body,  Controller,  Delete,  FileTypeValidator,  Get,  MaxFileSizeValidator,  Param,  ParseFilePipe,  ParseIntPipe,  Patch,  Post,  Put,  Query,  Res,  Session,  UnauthorizedException,  UploadedFile,  UseGuards,  UseInterceptors,  UsePipes,  ValidationPipe,} from '@nestjs/common';
import { EmailService } from './Services/emailService';
import { EmailDto } from './Dto/EmailDto';


@Controller('Email')
export class EmailController{
    constructor(private readonly emailService:EmailService) {}
   
    @Post('/send')

    async sendEmail(@Body(ValidationPipe) sendEmailDto: EmailDto) {
        console.log("Controller");
  
      const { to, subject, content } = sendEmailDto;
  
  
  
  
      const mydata = {
  
        to: to,
  
        subject: subject,
  
        text: content,
  
      };
  
      return this.emailService.sendEmail(mydata);
  
    }
  





      
      


    }