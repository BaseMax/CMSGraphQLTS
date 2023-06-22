import { Injectable } from '@nestjs/common';
import { CreateContactInput } from './dto/create-contact.input';
import { UpdateContactInput } from './dto/update-contact.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { CommonService } from 'src/common';
import { Answer, Message } from '@prisma/client';
import { CreateAnswerInput } from './dto/create.answer';
// import { Message } from './entities/contact.entity';

@Injectable()
export class ContactService extends CommonService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.message);
  }
  async create(createContactInput: CreateContactInput) {
    return await this.prisma.message.create({
      data: {
        ...createContactInput,
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      },
    });
  }

  async findAll(): Promise<Message[]> {
    return await this.prisma.message.findMany({
      include: {
        answers: true,
      },
    });
  }

  async findOne(id: number): Promise<Message> {
    return await this.prisma.message.findUnique({
      where: { id },
      include: {
        answers: true,
      },
    });
  }

  async update(updateContactInput: UpdateContactInput): Promise<Message> {
    await this.findByIdOrThrow(updateContactInput.id);
    return this.prisma.message.update({
      where: { id: updateContactInput.id },
      data: { ...updateContactInput, updatedAt: new Date().toISOString() },
    });
  }
  async viewMessage(id: number): Promise<Message> {
    return this.prisma.message.update({
      where: { id },
      data: {
        firstTimeViewed: new Date().toISOString(),
      },
    });
  }
  async remove(id: number) {
    await this.findByIdOrThrow(id);

    return await this.prisma.message.delete({
      where: { id },
    });
  }

  async answer(createAnswerInput: CreateAnswerInput): Promise<Answer> {
    await this.findByIdOrThrow(createAnswerInput.messageId);

    return await this.prisma.answer.create({
      data: {
        ...createAnswerInput,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      include: {
        Message: true,
      },
    });
  }
}
