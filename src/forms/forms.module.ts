import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from './entities/form.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Form]), AuthModule],
  controllers: [FormsController],
  providers: [FormsService],
  exports: [TypeOrmModule],
})
export class FormsModule {}
