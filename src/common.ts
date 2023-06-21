import { HttpException, HttpStatus } from '@nestjs/common';

export class CommonService {
  constructor(private readonly object: any) {}

  checkT() {
    const t = typeof this.object;
    console.log(this.object);
    console.log(t);
  }

  async findByIdOrThrow(id: number): Promise<object> {
    const category = await this.object.findUnique({ where: { id } });
    if (!category)
      throw new HttpException(
        `${this.object.name} with this credential doesn't exist`,
        HttpStatus.BAD_REQUEST,
      );
    return category;
  }
}
