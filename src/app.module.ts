import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';
import { CategoryModule } from './category/category.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from './auth/guards/role.guard';
import { FaqModule } from './faq/faq.module';
import { SliderModule } from './slider/slider.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message:
            (error?.extensions?.exception as any)?.response?.message ||
            error?.message,
        };
        return graphQLFormattedError;
      },
    }),

    PrismaModule,
    PostModule,
    CategoryModule,
    AuthModule,
    UserModule,
    FaqModule,
    SliderModule,
    UploadModule,
  ],
  controllers: [],
  providers: [{ provide: APP_GUARD, useClass: RoleGuard }],
})
export class AppModule {}
