import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AvionsService } from './avions.service';
import { AvionDto } from './dto/avion.dto';
import { AvionWithVolsDto } from './dto/avionWithVols.dto';

@Controller('avions')
export class AvionsController {
  constructor(private readonly avionsService: AvionsService) {}

  @Get()
  async findAll(): Promise<AvionDto[]> {
    const data = await this.avionsService.findAll();
    return data.map((avion) => new AvionDto(avion));
  }

  @Get('/:id')
  async findById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<AvionWithVolsDto | null> {
    const avion = await this.avionsService.findById(id);
    if (avion) {
      return new AvionWithVolsDto(avion);
    }
    return null;
  }
}
