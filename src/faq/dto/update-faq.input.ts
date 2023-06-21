import { CreateFaqInput } from './create-faq.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFaqInput extends PartialType(CreateFaqInput) {
  @Field(() => Int)
  id: number;
}
