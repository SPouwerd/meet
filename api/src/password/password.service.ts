import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdatePasswordDto } from './dto/update-password.dto';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
const saltOrRounds = 10;
@Injectable()
export class PasswordService {
  constructor(private prisma: PrismaService) {}
  async hashPassword(password: string) {
    return await bcrypt.hash(password, saltOrRounds);
  }
  async comparePassword(password: string, hash: string) {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
  }
  findAll() {
    return `This action returns all password`;
  }

  findOne(id: number) {
    return `This action returns a #${id} password`;
  }

  remove(id: number) {
    return `This action removes a #${id} password`;
  }
}
