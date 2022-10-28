import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsString, IsNotEmpty, IsEmail, IsEnum } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  surname: string;
  @IsNotEmpty()
  @ApiProperty()
  bio: string;
  @IsNotEmpty()
  @ApiProperty()
  location: string;
}
