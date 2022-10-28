import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Public, Roles } from 'src/auth/constants';
import { Role } from '@prisma/client';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Public()
  @Post('signup')
  @ApiCreatedResponse({
    description: 'User created successfully',
    status: HttpStatus.CREATED,
  })
  //@Roles()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get('findAllUsers')
  findAll() {
    return this.usersService.findAll();
  }
  @Get('findUser/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch('updateUser/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(+id, updateUserDto);
  }

  @Delete('deleteUser/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
