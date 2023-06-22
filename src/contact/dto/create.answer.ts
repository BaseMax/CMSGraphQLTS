import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateAnswerInput {
  @IsString()
  @Field()
  content: string;

  @IsNumber()
  @Field(() => Int)
  messageId: number;
}
