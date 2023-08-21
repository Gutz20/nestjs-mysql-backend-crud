import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedsModule } from 'src/breeds/breeds.module';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cat]), BreedsModule, AuthModule],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
