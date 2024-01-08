import { Injectable } from '@nestjs/common';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lote } from './entities/lote.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LotesService {
  constructor(
    @InjectRepository(Lote) private readonly loteRepository: Repository<Lote>,
  ) {}

  async create(createLoteDto: CreateLoteDto) {
    const lote = this.loteRepository.create(createLoteDto);
    return await this.loteRepository.save(lote);
  }

  async findAll() {
    return await this.loteRepository.find();
  }

  async findOne(id: number) {
    return await this.loteRepository.findOneBy({ id });
  }

  async update(id: number, updateLoteDto: UpdateLoteDto) {
    return await this.loteRepository.update(id, updateLoteDto);
  }

  async remove(id: number) {
    return await this.loteRepository.softDelete({ id });
  }
}
