import { Module } from '@nestjs/common';
import { FormsModule } from 'src/forms/forms.module';
import { FormsService } from 'src/forms/forms.service';
import { ExportController } from './export.controller';
import { ExportService } from './export.service';

@Module({
  imports: [FormsModule],
  controllers: [ExportController],
  providers: [ExportService, FormsService],
})
export class ExportModule {}
