import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreatePostInput {
  @IsString()
  @Field()
  title: string;

  @IsString()
  @Field()
  content: string;

  @IsNumber()
  @Field((type) => Int)
  categoryId: number;
}
