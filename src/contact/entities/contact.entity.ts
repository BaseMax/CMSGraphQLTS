import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Answer } from './answer.entity';

@ObjectType()
export class Message {
  @Field()
  id: number;

  @Field()
  message: string;

  @Field(() => [Answer], { nullable: true })
  answers?: Answer[];
}
