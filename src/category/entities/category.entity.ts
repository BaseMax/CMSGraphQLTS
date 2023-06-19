import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  name: string;
}
