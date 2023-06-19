import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class RegisterUserInput {
  
  @IsNotEmpty()
  @IsString()
  @Field()
   name: string;

  @IsEmail()
  @Field()
   email:string

   @IsString()
   @Field()
   password: string


}
