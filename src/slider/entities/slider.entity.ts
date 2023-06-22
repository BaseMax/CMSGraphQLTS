import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Slider {
  @Field(() => Int)
  id: number;
  @Field()
  title: string;
  @Field()
  description: string;

  @Field(() => String)
  uploadedImagePath: string;
}
