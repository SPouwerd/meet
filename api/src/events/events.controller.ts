import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/roles.guard';
@ApiBearerAuth()
@ApiTags('events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post('create/:userId')
  @ApiCreatedResponse({
    description: 'Profile created successfully',
    status: HttpStatus.CREATED,
  })
  async create(
    @Param('userId') userId: string,
    @Body() createEventDto: CreateEventDto,
  ) {
    return this.eventsService.create(createEventDto, +userId);
  }

  @Get('getallEvents')
  async findAll() {
    return await this.eventsService.findAll();
  }

  @Get('getOneEvent/:id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  @Patch('updateEvent/:id')
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return await this.eventsService.update(+id, updateEventDto);
  }

  @Delete('deleteEvent/:id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }
}
