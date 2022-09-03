import { Module } from '@nestjs/common';
import { GateIoService } from './servies/gate-io.service';

@Module({
  providers: [GateIoService],
  exports: [GateIoService]
})
export class GateModule {}
