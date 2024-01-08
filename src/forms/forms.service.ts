import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Form } from './entities/form.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FormsService {
  constructor(
    @InjectRepository(Form) private readonly formRepository: Repository<Form>,
  ) {}

  async create(createFormDto: CreateFormDto) {
    const form = this.formRepository.create(createFormDto);
    return await this.formRepository.save(form);
  }

  async findAll() {
    return await this.formRepository.find();
  }

  async findOne(id: number) {
    return await this.formRepository.findOneBy({ id });
  }

  async update(id: number, updateFormDto: UpdateFormDto) {
    return await this.formRepository.update(id, updateFormDto);
  }

  async remove(id: number) {
    return await this.formRepository.softDelete({ id });
  }
}
