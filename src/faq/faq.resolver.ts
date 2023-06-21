import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FaqService } from './faq.service';
import { Faq } from './entities/faq.entity';
import { CreateFaqInput } from './dto/create-faq.input';
import { UpdateFaqInput } from './dto/update-faq.input';

@Resolver(() => Faq)
export class FaqResolver {
  constructor(private readonly faqService: FaqService) {}

  @Mutation(() => Faq)
  createFaq(@Args('createFaqInput') createFaqInput: CreateFaqInput) {
    return this.faqService.create(createFaqInput);
  }

  @Query(() => [Faq], { name: 'AllFAQs' })
  findAll() {
    return this.faqService.findAll();
  }

  @Query(() => Faq, { name: 'faq' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.faqService.findByIdOrThrow(id);
  }

  @Mutation(() => Faq)
  updateFaq(@Args('updateFaqInput') updateFaqInput: UpdateFaqInput) {
    return this.faqService.update(updateFaqInput);
  }

  @Mutation(() => Faq)
  removeFaq(@Args('id', { type: () => Int }) id: number) {
    return this.faqService.remove(id);
  }
}
