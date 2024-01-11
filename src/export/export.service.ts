import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateExportDto } from './dto/create-export.dto';
import { UpdateExportDto } from './dto/update-export.dto';
import { Repository } from 'typeorm';
import * as ExcelJS from 'exceljs';
import { Form } from 'src/forms/entities/form.entity';

@Injectable()
export class ExportService {
  constructor(
    @InjectRepository(Form)
    private readonly formRepository: Repository<Form>,
  ) {}

  async generateExcel() {
    const forms = await this.formRepository.find();
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Subscribers');

    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Nombre', key: 'name', width: 50 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Mensaje', key: 'message', width: 60 },
      { header: 'Telefono', key: 'phone', width: 30 },
      { header: 'DNI', key: 'dni', width: 30 },
      { header: 'Terminos', key: 'terms', width: 30 },
      { header: 'Promociones', key: 'promotions', width: 30 },
    ];

    forms.forEach((sub) => {
      worksheet.addRow({
        id: sub.id,
        name: sub.name,
        email: sub.email,
        message: sub.message,
        dni: sub.dni,
        phone: sub.phone,
        terms: sub.terms,
        promotions: sub.promotions,
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    return buffer;
  }
}
