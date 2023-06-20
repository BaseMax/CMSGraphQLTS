import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  email: string;
  password: string;
  role: string;
}

export enum Role {
  admin = 'admin',
  User = 'user',
}
