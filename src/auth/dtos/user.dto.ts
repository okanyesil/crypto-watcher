import { Exclude, Expose } from "class-transformer";
import { Entity } from "typeorm";

@Entity()
export class UserResponse {

    id:number;
    @Expose()
    email: string;
    
    @Exclude()
    password: string;

    @Expose()
    username: string;

    @Expose()
    fullName: string;
}