import { UsersService } from './../users/users.service';

import { Module } from '@nestjs/common';
import { PasswordService } from './password.service';
import { PasswordController } from './password.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PasswordController],
  providers: [PasswordService, PrismaService],
})
export class PasswordModule {}
