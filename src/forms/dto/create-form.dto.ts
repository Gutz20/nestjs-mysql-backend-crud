import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateFormDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  dni: string;

  @IsString()
  phone: string;

  @IsString()
  message: string;

  @IsBoolean()
  terms: boolean;

  @IsString()
  promotions: string;
}
