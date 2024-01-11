import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ExportService } from './export.service';

@Controller('export')
export class ExportController {
  constructor(private readonly exportService: ExportService) {}

  @Get('subscribers')
  async exportSubscribersToExcel(@Res() res: Response) {
    const excelBuffer = await this.exportService.generateExcel();

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=subscribers.xlsx',
    );
    res.end(excelBuffer);
  }
}
