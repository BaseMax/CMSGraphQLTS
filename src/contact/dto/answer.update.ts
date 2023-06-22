import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateAnswerInput } from './create.answer';
import { IsNumber } from 'class-validator';

@InputType()
export class UpAnswerInput extends PartialType(CreateAnswerInput) {
  @IsNumber()
  @Field(() => Int)
  id: number;
}
