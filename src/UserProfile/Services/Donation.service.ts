import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { retry } from 'rxjs';
import { Donationentity } from '../Entity/DonationEntity';
import { DonationDto } from '../Dto/donation.dto';
import { Mosque } from '../Entity/Mosque.entity';


@Injectable()
export class DonationService {
  constructor(
    @InjectRepository(Donationentity)
    private readonly anny: Repository<Donationentity>,
    @InjectRepository(Mosque)
    private readonly Mosque: Repository<Mosque>
  ) {}
  async DonateNow(announcement: DonationDto) {
    announcement.MosqueName;


   const data=await this.Mosque.findOneBy({MosqueName:announcement.MosqueName});
   console.log(data);
    try{
      if(data==null){
       // throw new Error("Mosque Not Found");
      }
        console.log( data.Amount);
        console.log(  announcement.Amount);
        const data1= (parseFloat(data.Amount ) + parseFloat(announcement.Amount ));

        var dat=data1.toString()
        data.Amount =dat;
        

      console.log(data.Amount);
     await this.Mosque.update(data.IdMosque,data);
     
     

    return"success" ;

    }
    catch(error){
      console.log(error);
    }
    
  }
  async AllDonation(): Promise<Donationentity[]>{
    var data=await this.anny.find();
    return data;
  }

  async donationbyid(DonationId: number): Promise<Donationentity> {
    var data=await this.anny.findOneBy({DonationId});
    return data;


  
  } 
  async findOne(DonationId: number): Promise<Donationentity> {
    return await this.anny.findOneBy({DonationId});

}
async update(DonationId: number, announcement: DonationDto): Promise<any> {
    var existing;
      var body= announcement.Amount;
        var data=await this.anny.findOneBy({DonationId});
        existing=data.Amount;
        var total=existing+body;
        announcement.Amount=total;

    return await this.anny.update(DonationId, announcement);
}
 
}


