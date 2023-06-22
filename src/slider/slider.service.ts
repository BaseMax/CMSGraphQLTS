import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSliderInput } from './dto/create-slider.input';
import { UpdateSliderInput } from './dto/update-slider.input';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { PrismaService } from 'src/prisma/prisma.service';
import { Slider } from '@prisma/client';
import { CommonService } from 'src/common';

@Injectable()
export class SliderService extends CommonService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.slider);
  }
  async create(createSlideInput: CreateSliderInput) {
    return await this.prisma.slider.create({
      data: {
        ...createSlideInput,
      },
    });
  }

  async findAll(): Promise<Slider[]> {
    return await this.prisma.slider.findMany({});
  }

  async findOne(id: number): Promise<Slider> {
    return await this.prisma.slider.findUnique({ where: { id } });
  }

  async update(updateSliderInput: UpdateSliderInput): Promise<Slider> {
    await this.findByIdOrThrow(updateSliderInput.id);
    return this.prisma.slider.update({
      where: { id: updateSliderInput.id },
      data: {
        ...updateSliderInput,
      },
    });
  }

  async remove(id: number): Promise<Slider> {
    await this.findByIdOrThrow(id);
    return await this.prisma.slider.delete({ where: { id } });
  }
}
