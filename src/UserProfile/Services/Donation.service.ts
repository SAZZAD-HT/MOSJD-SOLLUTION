import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { retry } from 'rxjs';
import { Donationentity } from '../Entity/DonationEntity';
import { DonationDto } from '../Dto/donation.dto';


@Injectable()
export class DonationService {
  constructor(
    @InjectRepository(Donationentity)
    private readonly anny: Repository<Donationentity>
  ) {}
  async CreateDonation(announcement: Donationentity): Promise<Donationentity> {
    return await this.anny.save(announcement);
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


