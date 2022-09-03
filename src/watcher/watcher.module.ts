import { Module } from '@nestjs/common';
import { WatcherService } from './services/watcher.service';
import { WatcherController } from './controller/watcher.controller';
import { BinanceModule } from 'src/binance/binance.module';
import { KucoinModule } from 'src/kucoin/kucoin.module';
import { GateModule } from 'src/gate/gate.module';

@Module({
  imports: [BinanceModule, KucoinModule, GateModule],
  controllers: [WatcherController],
  providers: [WatcherService]
})
export class WatcherModule {}
