import { Module } from '@nestjs/common';
import { SliderService } from './slider.service';
import { SliderResolver } from './slider.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  providers: [SliderResolver, SliderService]
})
export class SliderModule {}
