import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { UseGuards } from '@nestjs/common';
import { AtGuard } from 'src/auth/guards/auth.gaurd';
import { GetCurrentUserId } from 'src/auth/decorators/current-user-decorator';
import { Roles } from 'src/auth/decorators/set-role';
import { Role } from 'src/user/entities/user.entity';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @UseGuards(AtGuard)
  @Mutation(() => Post)
  async createPost(
    @Args('createPostInput') createPostInput: CreatePostInput,
    @GetCurrentUserId() userId: number,
  ) {
    return await this.postService.create(createPostInput, userId);
  }

  @Query(() => [Post], { name: 'AllPost' })
  findAll(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postService.findOne(id);
  }

  @Mutation(() => Post)
  updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postService.update(updatePostInput);
  }

  @Roles(Role.admin)
  @Mutation(() => Post)
  removePost(@Args('id', { type: () => Int }) id: number) {
    return this.postService.remove(id);
  }
}
