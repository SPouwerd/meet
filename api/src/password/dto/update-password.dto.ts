import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class UpdatePasswordDto {
  @ApiProperty()
  @IsString()
  @Length(8, 32)
  password: string;
}
