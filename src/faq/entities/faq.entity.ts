import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Faq {
  @Field()
  question: string;

  @Field()
  answer: string;

  @Field(() => Int)
  id: number;
}
