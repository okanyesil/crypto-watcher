import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    password: string;

    @Column()
    username:string;

    @Column()
    email: string;

    @Column()
    fullName:string;



}