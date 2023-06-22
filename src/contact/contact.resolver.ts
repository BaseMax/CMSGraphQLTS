import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ContactService } from './contact.service';
import { Message } from './entities/contact.entity';
import { CreateContactInput } from './dto/create-contact.input';
import { UpdateContactInput } from './dto/update-contact.input';
import { CreateAnswerInput } from './dto/create.answer';
import { Answer } from './entities/answer.entity';

@Resolver(() => Message)
export class ContactResolver {
  constructor(private readonly contactService: ContactService) {}

  @Mutation(() => Message)
  async createContact(
    @Args('createContactInput') createContactInput: CreateContactInput,
  ) {
    return await this.contactService.create(createContactInput);
  }

  @Query(() => [Message], { name: 'findAllContacts' })
  async findAll() {
    return await this.contactService.findAll();
  }

  @Query(() => Message, { name: 'contact' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.contactService.findOne(id);
  }

  @Mutation(() => Message)
  async viewMessage(@Args('id', { type: () => Int }) id: number) {
    return await this.contactService.viewMessage(id);
  }

  @Mutation(() => Answer, { name: 'answerAMessage' })
  async answer(
    @Args('createAnswerInput') createAnswerInput: CreateAnswerInput,
  ) {
    return await this.contactService.answer(createAnswerInput);
  }

  @Mutation(() => Message)
  async updateContact(
    @Args('updateContactInput') updateContactInput: UpdateContactInput,
  ) {
    return this.contactService.update(updateContactInput);
  }

  @Mutation(() => Message)
  async removeContact(@Args('id', { type: () => Int }) id: number) {
    return await this.contactService.remove(id);
  }
}
