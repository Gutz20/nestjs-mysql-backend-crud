import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { BreedsModule } from './breeds/breeds.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres', // mysql
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT), // 3307
      username: process.env.POSTGRES_USERNAME, //user_crud
      password: process.env.POSTGRES_PASSWORD, //root
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      ssl: process.env.POSTGRES_SSL === 'true',
      extra: {
        ssl:
          process.env.POSTGRES_SSL === 'true'
            ? { rejectUnauthorized: false }
            : null,
      },
    }),
    CatsModule,
    BreedsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
