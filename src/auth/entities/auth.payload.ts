import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class AuthPayload {
  @Field()
  name: string;

  @Field()
  token: string;
}
