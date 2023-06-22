import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2';
import exp from 'constants';
import { Category } from '@prisma/client';
describe('AppController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prisma = app.get(PrismaService);
    await app.init();
  });
  beforeEach(async () => {});

  afterAll(async () => {
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();
    const hashedPassword = await argon2.hash('aksjdakda');
    const staticUser = {
      name: 'khalvai',
      email: 'jakjsl2dajks@gmail.com',
      password: hashedPassword,
    };

    await prisma.user.create({ data: { ...staticUser } });
    const categories = [
      { name: 'art' },
      { name: 'science' },
      { name: 'book' },
      { name: 'physics' },
      { name: 'chemistry' },
    ];

    await prisma.category.createMany({ data: [...categories] });
  });

  async function register(email: string, password: string, name: string) {
    const mutation = `mutation Register($input: RegisterUserInput!) {
    register(input: $input) {
      name
      token
    }
  }`;
    const hashedPassword = argon2.hash(password);
    const variables = { input: { email, password: hashedPassword, name } };

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query: mutation, variables });
  }

  async function login(email: string, password: string) {
    const mutation = `mutation LogIn($input: loginInput!) {
      logIn(input: $input) {
        name
        token
      }
    }`;

    const variables = { input: { email, password } };

    return request(app.getHttpServer()).post('/graphql').send({
      query: mutation,
      variables,
    });
  }

  describe('auth', () => {
    it('should register the user', async () => {
      const user = {
        name: 'khalvai',
        email: 'jakjsldajks@gmail.com',
        password: 'aksjdakda',
      };
      const response = await register(user.email, user.password, user.name);

      expect(response.status).toBe(200);
    });

    it('should login', async () => {
      const user = {
        email: 'jakjsl2dajks@gmail.com',
        password: 'aksjdakda',
      };
      const result = await login(user.email, user.password);
      expect(result.status).toBe(200);
    });
  });

  describe('category', () => {
    async function createCategory(name: string) {
      const mutation = `mutation CreateCategory($createCategoryInput: CreateCategoryInput!) {
        createCategory(createCategoryInput: $createCategoryInput) {
          id
          name
        }
      }`;
      const variables = { name };

      return request(app.getHttpServer())
        .post('/graphql')
        .send({ query: mutation, variables });
    }
    it('should create category', async () => {
      const category = { name: 'art' };
      const result = await createCategory(category.name);
      expect(result.status).toBe(200);
    });
    async function findAllCategories(): Promise<request.Response> {
      return request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `{
        findAllCategory {
          name
          id
        }
        }
      `,
        });
    }
    it('should fetch all categories', async () => {
      const result = await findAllCategories();
      console.log(result);

      expect(result.status).toBe(200);
    });
  });
});
