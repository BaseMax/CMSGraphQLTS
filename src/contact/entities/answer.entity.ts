import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Message } from './contact.entity';

@ObjectType()
export class Answer {
  @Field(() => Int)
  id: number;

  @Field()
  content: string;

  @Field(() => Message, { nullable: true })
  Message: Message;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
