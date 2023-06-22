import { CreateSliderInput } from './create-slider.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSliderInput extends PartialType(CreateSliderInput) {
  @Field(() => Int)
  id: number;
}
