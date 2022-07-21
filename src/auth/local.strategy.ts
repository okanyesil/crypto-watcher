import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { LoginDto } from "./dtos/login.dto";
import { UserService } from "./services/user/user.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(
        private userService: UserService
    ) {
        super({
            usernameField: "username",
            passwordField: "password"
        });
    }

    async validate(username: string, password:string) {
        const findUser = await this.userService.signIn({username, password});
        if(!findUser) throw new UnauthorizedException();

        return findUser;
    }
}