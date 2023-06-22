import { Test, TestingModule } from '@nestjs/testing';
import { SliderService } from './slider.service';

describe('SliderService', () => {
  let service: SliderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SliderService],
    }).compile();

    service = module.get<SliderService>(SliderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
