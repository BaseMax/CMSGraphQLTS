import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field((type) => Int)
  id: number;
  @Field()
  title: string;
  @Field()
  content: string;
}
