import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBasicAuth, ApiForbiddenResponse, ApiResponse } from '@nestjs/swagger';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CreateUser } from './dtos/create-user.dto';
import { LoginDto } from './dtos/login.dto';
import { UserResponse } from './dtos/user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
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
    @UseGuards(LocalAuthGuard)
    @Post('signin')
    signIn(@Request() req) {
       return this.userService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user;
    }

}
