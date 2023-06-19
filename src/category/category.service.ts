import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Category } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}
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
    await this.findCategoryByIdOrThrow(id);
    return await this.prisma.category.update({
      data: { ...updateCategoryInput },
      where: { id },
    });
  }
  async findCategoryByIdOrThrow(id: number) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category)
      throw new HttpException(
        "category with this credential doesn't exist",
        HttpStatus.BAD_REQUEST,
      );
    return category;
  }
  async remove(id: number) {
    await this.findCategoryByIdOrThrow(id);
    return await this.prisma.category.delete({ where: { id } });
  }
}
