import { Entity,Column,PrimaryColumn } from "typeorm";
@Entity()
export class Admin{
    @PrimaryColumn()
    id:number;
    
    @Column()
    name:string;
    @Column()
    email:string;
    @Column()
    password:string;
    @Column()
    contact:string;
    @Column()
    address:string;
    @Column()
    role:string;
    @Column()
    status:string;  
}