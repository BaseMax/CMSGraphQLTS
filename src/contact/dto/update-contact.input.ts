import { CreateContactInput } from './create-contact.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContactInput extends PartialType(CreateContactInput) {
  @Field(() => Int)
  id: number;
}
