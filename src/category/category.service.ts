import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Category } from '@prisma/client';
import { CommonService } from 'src/common';

@Injectable()
export class CategoryService extends CommonService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.category);
  }
  async create(createCategoryInput: CreateCategoryInput): Promise<Category> {
    return await this.prisma.category.create({
      data: { ...createCategoryInput },
    });
  }

  async findAll(): Promise<Category[]> {
    return await this.prisma.category.findMany();
  }

  async findOne(id: number): Promise<Category> {
    return this.prisma.category.findUnique({ where: { id } });
  }

  async update(id: number, updateCategoryInput: UpdateCategoryInput) {
    await this.findByIdOrThrow(id);
    return await this.prisma.category.update({
      data: { ...updateCategoryInput },
      where: { id },
    });
  }

  async remove(id: number) {
    await this.findByIdOrThrow(id);
    return await this.prisma.category.delete({ where: { id } });
  }
}
