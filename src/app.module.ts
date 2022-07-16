import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entitiy/user.entity';

@Module({
  imports: [AuthModule,
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db-crypto.sqlite',
    synchronize: true,
    entities: [User]
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
