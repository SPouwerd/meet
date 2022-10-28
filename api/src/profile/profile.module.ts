import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { PasswordService } from 'src/password/password.service';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, PrismaService, UsersService, PasswordService],
})
export class ProfileModule {}
