import { InputType, Int, Field } from '@nestjs/graphql';
import { IsArray, IsString } from 'class-validator';

@InputType()
export class CreateSliderInput {
  @IsString()
  @Field()
  title: string;

  @IsString()
  @Field()
  description: string;

  @Field()
  @IsString()
  uploadedImagePath: string;
}
