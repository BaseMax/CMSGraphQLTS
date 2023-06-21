import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Post } from '@prisma/client';
import { CategoryService } from 'src/category/category.service';
import { CommonService } from 'src/common';

@Injectable()
export class PostService extends CommonService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly categoryService: CategoryService,
  ) {
    super(prisma.post);
  }

  async create(
    createPostInput: CreatePostInput,
    userId: number,
  ): Promise<Post> {
    return this.prisma.post.create({
      data: {
        ...createPostInput,
        authorId: userId,
      },
    });
  }

  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  async findByCategory(categoryId: number): Promise<Post[]> {
    await this.categoryService.findByIdOrThrow(categoryId);
    return await this.prisma.post.findMany({
      where: {
        categoryId: categoryId,
      },
    });
  }
  async update(updatePostInput: UpdatePostInput): Promise<Post> {
    return await this.prisma.post.update({
      where: { id: updatePostInput.postId },
      data: {
        ...updatePostInput,
      },
    });
  }

  async remove(id: number): Promise<Post> {
    return await this.prisma.post.delete({ where: { id } });
  }
}
