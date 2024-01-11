import { ExportModule } from './export/export.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { BreedsModule } from './breeds/breeds.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { FormsModule } from './forms/forms.module';
import { LotesModule } from './lotes/lotes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql', // mysql
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT), // 3307
      username: process.env.MYSQL_USERNAME, //user_crud
      password: process.env.MYSQL_PASSWORD, //root
      database: process.env.MYSQL_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      ssl: process.env.MYSQL_SSL === 'true',
      extra: {
        ssl:
          process.env.MYSQL_SSL === 'true'
            ? { rejectUnauthorized: false }
            : null,
      },
    }),
    CatsModule,
    BreedsModule,
    UsersModule,
    ExportModule,
    AuthModule,
    FormsModule,
    LotesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
