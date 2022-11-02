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
@ApiTags('event')
@Controller('event')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post('/:userId')
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

  @Get('')
  async findAll() {
    return await this.eventsService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return await this.eventsService.update(+id, updateEventDto);
  }

  // @Delete('/:id')
  // remove(@Param('id') id: string) {
  //   return this.eventsService.remove(+id);
  // }
}
