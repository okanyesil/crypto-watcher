import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUser } from 'src/auth/dtos/create-user.dto';
import { User } from 'src/auth/entitiy/user.entity';
import { In, Repository } from 'typeorm';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { LoginDto } from 'src/auth/dtos/login.dto';

const scrypt = promisify(_scrypt);

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){}


    async createUser(user: CreateUser){

        const users = await this.userRepository.find({
            where: [
                { username: user.username },
                { email: user.email }
            ]

        });

        if(users.length) throw new BadRequestException('This user already in use');

        const {password, passwordAgain} = user;

        if(password !== passwordAgain) throw new BadRequestException('Your password not matched!!!');

        const salt = randomBytes(8).toString('hex');

        const hash = await scrypt(salt, password, 32) as Buffer;

        const result = salt + '.' + hash.toString('hex');
        let newUser: CreateUser = {} as CreateUser;
        Object.assign(newUser,user);
        newUser.password = result;
        const createUser = this.userRepository.create(newUser);
        return this.userRepository.save(createUser);
    }

   async signIn(user:Partial<LoginDto>) {
    const findUser = await this.userRepository.findOne({
        where: [
            {username: user.username},
            { email: user.email },
            {password: user.password}
        ]
    });

    if(!findUser) throw new BadRequestException('there is no user with this username/email');
    
    console.log(findUser);
    
    
   }


}
