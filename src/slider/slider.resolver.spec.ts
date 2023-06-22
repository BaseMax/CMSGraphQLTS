import { Test, TestingModule } from '@nestjs/testing';
import { SliderResolver } from './slider.resolver';
import { SliderService } from './slider.service';

describe('SliderResolver', () => {
  let resolver: SliderResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SliderResolver, SliderService],
    }).compile();

    resolver = module.get<SliderResolver>(SliderResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
