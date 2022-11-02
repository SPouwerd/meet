import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
@ApiBearerAuth()
@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('/:userId')
  @ApiCreatedResponse({
    description: 'Profile created successfully',
    status: HttpStatus.CREATED,
  })
  async create(
    @Param('userId') userId: string,
    @Body() createProfileDto: CreateProfileDto,
  ) {
    return await this.profileService.create(createProfileDto, +userId);
  }

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(+id);
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return await this.profileService.update(+id, updateProfileDto);
  }

  // @Delete('/:id')
  // remove(@Param('id') id: string) {
  //   return this.profileService.remove(+id);
  // }
}
