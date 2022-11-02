import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  MaxLength,
  IsOptional,
} from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(50)
  @IsOptional()
  password: string;
  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  username: string;
}
