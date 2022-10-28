import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { PasswordService } from 'src/password/password.service';

@Module({
  controllers: [EventsController],
  providers: [EventsService, PrismaService, UsersService, PasswordService],
})
export class EventsModule {}
