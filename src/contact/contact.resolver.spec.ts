import { Test, TestingModule } from '@nestjs/testing';
import { ContactResolver } from './contact.resolver';
import { ContactService } from './contact.service';

describe('ContactResolver', () => {
  let resolver: ContactResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactResolver, ContactService],
    }).compile();

    resolver = module.get<ContactResolver>(ContactResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
