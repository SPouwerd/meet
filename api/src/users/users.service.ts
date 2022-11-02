import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PasswordService } from 'src/password/password.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private passwordservice: PasswordService,
  ) {}

  //signup user
  async create(userDto: CreateUserDto) {
    const user = await this.findExistingByEmail(userDto.email);
    if (user) {
      throw new BadRequestException('User already Exists');
    } else {
      //hashing new user password
      const pass = await this.passwordservice.hashPassword(userDto.password);
      //create new user account with hashed password
      //hashed password in pass
      userDto.password = pass;
      const result = await this.prisma.user.create({
        data: {
          email: userDto.email,
          password: userDto.password,
          username: userDto.username,
          roles: 'Admin',
        },
      });
      return result;
    }
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        profile: true,
        Event: true,
      },
    });
  }

  async findOne(id) {
    console.log('UserID lookup...', id);

    const result = await this.prisma.user.findFirst({
      where: {
        id: id,
      },
      include: {
        profile: true,
        Event: true,
      },
    });
    if (result) {
      console.log('Found user with ID', result);

      return result;
    } else {
      console.log('User with ID does not exists');
      throw new BadRequestException('User doesnt Exists');
    }
  }

  async findExistingByEmail(email: string) {
    const result = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (result) {
      console.log('resultttttt', result);

      return result;
    }
  }

  async findOneByEmail(email: string) {
    const result = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (result) {
      console.log('resultttttt', result);

      return result;
    } else {
      console.log('User with Email does not exists');
      throw new BadRequestException('User doesnt Exists');
    }
  }

  async findOneByName(name: string) {
    const result = await this.prisma.user.findFirst({
      where: {
        username: name,
      },
      include: {
        profile: true,
        Event: true,
      },
    });
    if (result) {
      console.log('resultttttt', result);

      return result;
    } else {
      console.log('User with This Name does not exists');
      throw new BadRequestException('User doesnt Exists');
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    if (user) {
      const pass = await this.passwordservice.hashPassword(
        updateUserDto.password,
      );
      //create new user account with hashed password
      //hashed password in pass
      updateUserDto.password = pass;
      const result = await this.prisma.user.update({
        where: {
          id: id,
        },
        data: {
          password: updateUserDto.password,
          username: updateUserDto.username,
        },
      });
      return result;
    }
  }

  async remove(id: number) {
    const result = await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
    if (result) {
      console.log('resultttttt', result);

      return result;
    } else {
      console.log('User with This ID does not exists');
      throw new BadRequestException('User doesnt Exists');
    }
  }
}
