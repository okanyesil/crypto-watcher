import { Test, TestingModule } from '@nestjs/testing';
import { GateIoService } from './gate-io.service';

describe('GateIoService', () => {
  let service: GateIoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GateIoService],
    }).compile();

    service = module.get<GateIoService>(GateIoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
