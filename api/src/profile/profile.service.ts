import { BadRequestException, Injectable } from '@nestjs/common';
import { Profile } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    private prisma: PrismaService,
    private userService: UsersService,
  ) {}
  async create(createProfileDto: CreateProfileDto, id: number) {
    const user = await this.userService.findOne(id);
    if (user) {
      const result = await this.prisma.profile.create({
        data: {
          name: createProfileDto.surname,
          bio: createProfileDto.bio,
          location: createProfileDto.location,
          userId: id,
        },
      });
      return result;
    }
  }

  async findAll(): Promise<Profile[]> {
    return await this.prisma.profile.findMany({});
  }

  async findOne(id) {
    console.log('id:', id);

    const result = await this.prisma.profile.findFirst({
      where: {
        id: id,
      },
    });
    if (result) {
      console.log('result:', result);

      return result;
    } else {
      console.log('Profile with ID does not exists');
      throw new BadRequestException('Profile doesnt Exists');
    }
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    const profile = await this.findOne(id);
    if (profile) {
      const result = await this.prisma.profile.update({
        where: {
          id: id,
        },
        data: {
          name: updateProfileDto.surname,
          bio: updateProfileDto.bio,
          location: updateProfileDto.location,
        },
      });
      return result;
    }
  }

  async remove(id: number) {
    const result = await this.prisma.profile.delete({
      where: {
        id: id,
      },
    });
    if (result) {
      console.log('result:', result);

      return result;
    } else {
      console.log('Profile with This ID does not exists');
      throw new BadRequestException('Profile does not Exists');
    }
  }
}
