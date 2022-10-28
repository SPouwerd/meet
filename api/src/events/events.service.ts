import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProfileDto } from 'src/profile/dto/update-profile.dto';
import { UsersService } from 'src/users/users.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(
    private prisma: PrismaService,
    private userService: UsersService,
  ) {}
  async create(createEventDto: CreateEventDto, id: number) {
    const user = await this.userService.findOne(id);
    if (user) {
      const result = await this.prisma.event.create({
        data: {
          name: createEventDto.name,
          address: createEventDto.address,
          userId: id,
        },
      });
      return result;
    }
  }
  async findAll() {
    const result = await this.prisma.event.findMany({});
    return result;
  }

  async findOne(id) {
    console.log('id:', id);

    const result = await this.prisma.event.findFirst({
      where: {
        id: id,
      },
    });
    if (result) {
      console.log('result:', result);

      return result;
    } else {
      console.log('Event with ID does not exists');
      throw new BadRequestException('Event doesnt Exists');
    }
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    const event = await this.findOne(id);
    if (event) {
      const result = await this.prisma.event.update({
        where: {
          id: id,
        },
        data: {
          name: updateEventDto.name,
          address: updateEventDto.address,
        },
      });
      return result;
    }
  }

  async remove(id: number) {
    const result = await this.prisma.event.delete({
      where: {
        id: id,
      },
    });
    if (result) {
      console.log('result:', result);

      return result;
    } else {
      console.log('Event with This ID does not exists');
      throw new BadRequestException('Event does not Exists');
    }
  }
}
