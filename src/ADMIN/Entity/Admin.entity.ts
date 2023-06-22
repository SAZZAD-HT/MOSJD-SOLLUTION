import { Entity,Column,PrimaryColumn,PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Admin{
    @PrimaryGeneratedColumn()
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