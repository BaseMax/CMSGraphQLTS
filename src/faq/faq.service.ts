import { Injectable } from '@nestjs/common';
import { CreateFaqInput } from './dto/create-faq.input';
import { UpdateFaqInput } from './dto/update-faq.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { FAQ } from '@prisma/client';
import { CommonService } from 'src/common';

@Injectable()
export class FaqService extends CommonService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.fAQ);
  }
  async create(createFaqInput: CreateFaqInput): Promise<FAQ> {
    return await this.prisma.fAQ.create({
      data: {
        ...createFaqInput,
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
      },
    });
  }

  async findAll(): Promise<FAQ[]> {
    return await this.prisma.fAQ.findMany();
  }

  async findOne(id: number): Promise<FAQ> {
    return await this.prisma.fAQ.findUnique({ where: { id } });
  }

  async update(updateFaqInput: UpdateFaqInput): Promise<FAQ> {
    return await this.prisma.fAQ.update({
      where: { id: updateFaqInput.id },
      data: {
        ...updateFaqInput,
        updateAt: new Date().toISOString(),
      },
    });
  }

  async remove(id: number): Promise<FAQ> {
    return await this.prisma.fAQ.delete({ where: { id } });
  }
}
