import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm'
import { AddMosjidDto, namazdto } from '../Dto/add.Mosjid.dto';
import { Mosque } from '../Entity/Mosque.entity';

@Injectable()
export class MosjidService {
    
        constructor(
            @InjectRepository(Mosque)
            private readonly userRepo: Repository<Mosque>,
        ) {}
        
        async mfindAll(): Promise<Mosque[]> {
            var data=await this.userRepo.find();
            console.log(data);
            return data;
        }
        
         async findOne(IdMosque: number): Promise<Mosque> {
            return await this.userRepo.findOneBy( {IdMosque});
        }
        
        async mcreate(m: AddMosjidDto): Promise<Mosque> {
            return await this.userRepo.save(m);
        }
        
        async mupdate(id: number, user: Mosque) {

           if(await this.userRepo.update(id, user)){
            return  "Updated";} 
            else{
                return "Not Updated";
            }
        }
        
        async mdelete(id: number): Promise<void> {
            await this.userRepo.delete(id);
        }
        // async namazTime(): Promise<Mosque[]> {
        //     var data = await this.userRepo.find();
        //     var data1 = {
        //         Fajr: data[0].Fajr,
        //         Dhuhr: data[0].Dhuhr,
        //         Asr: data[0].Asr,
        //         Maghrib: data[0].Maghrib,
        //         Isha: data[0].Isha,
        //         Jummah1: data[0].Jummah1,
        //     }
        //     return [data1];
        // }
        async setnamazTime(id:number,namz:namazdto): Promise<void> {
            await this.userRepo.update(id,namz);

        
        }///namaz time  
        async ChangeNamzeTime(id: number, user: namazdto): Promise<void> {
            await this.userRepo.update(id, user);
        }
}

