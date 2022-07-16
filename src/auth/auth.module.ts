import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { User } from './entitiy/user.entity';
import { UserService } from './services/user/user.service';

@Module({
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [UserService]
})
export class AuthModule {}
