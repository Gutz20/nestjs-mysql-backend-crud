import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateLoteDto {
  @IsString()
  name: string;

  @IsString()
  state: string;

  @IsNumber()
  area: number;

  @IsArray()
  adjacentAreas: string[];
}
