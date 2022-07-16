import { Body, Controller, Post } from '@nestjs/common';
import { ApiBasicAuth, ApiForbiddenResponse, ApiResponse } from '@nestjs/swagger';
import { CreateUser } from './dtos/create-user.dto';
import { LoginDto } from './dtos/login.dto';
import { UserService } from './services/user/user.service';

@ApiBasicAuth()
@Controller('auth')
export class AuthController {

    constructor(
        private userService: UserService
    ){}

    @ApiResponse({status: 201, description: 'The user signup corretly'})
    @ApiForbiddenResponse({ description: 'Check the input if it is valid ?' })
    @Post('/signup')
    signUp(@Body() body: CreateUser){
        return this.userService.createUser(body);
    }

    @ApiResponse({status: 201, description: 'User login successfuly'})
    @Post('signin')
    signIn(@Body() body: Partial<LoginDto>) {
       return this.userService.signIn(body);
    }

}
