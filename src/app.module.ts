import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entitiy/user.entity';
import { BinanceModule } from './binance/binance.module';
import { WatcherModule } from './watcher/watcher.module';
import { KucoinModule } from './kucoin/kucoin.module';
import { GateModule } from './gate/gate.module';

@Module({
  imports: [AuthModule,
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db-crypto.sqlite',
    synchronize: true,
    entities: [User]
  }),
  BinanceModule,
  WatcherModule,
  KucoinModule,
  GateModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
