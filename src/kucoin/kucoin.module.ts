import { Module } from '@nestjs/common';
import { KucoinService } from './services/kucoin.service';

@Module({
  providers: [KucoinService],
  exports: [KucoinService]
})
export class KucoinModule {}
