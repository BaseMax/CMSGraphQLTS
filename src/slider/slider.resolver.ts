import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SliderService } from './slider.service';
import { Slider } from './entities/slider.entity';
import { CreateSliderInput } from './dto/create-slider.input';
import { UpdateSliderInput } from './dto/update-slider.input';

@Resolver(() => Slider)
export class SliderResolver {
  constructor(private readonly sliderService: SliderService) {}

  @Mutation(() => Slider)
  createSlider(
    @Args('createSliderInput') createSliderInput: CreateSliderInput,
  ) {
    return this.sliderService.create(createSliderInput);
  }

  @Query(() => [Slider], { name: 'findAllSlider' })
  async findAll() {
    return await this.sliderService.findAll();
  }

  @Query(() => Slider, { name: 'slider' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.sliderService.findOne(id);
  }

  @Mutation(() => Slider)
  async updateSlider(
    @Args('updateSliderInput') updateSliderInput: UpdateSliderInput,
  ) {
    return await this.sliderService.update(updateSliderInput);
  }

  @Mutation(() => Slider)
  async removeSlider(@Args('id', { type: () => Int }) id: number) {
    return await this.sliderService.remove(id);
  }
}
