import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PilotesService } from './pilotes.service';
import { PiloteDto } from './dto/pilote.dto';
import { PiloteWithVolsDto } from './dto/piloteWithVols.dto';

@Controller('pilotes')
export class PilotesController {
  constructor(private readonly pilotesService: PilotesService) {}
  @Get()
  async findAll(): Promise<PiloteDto[]> {
    const data = await this.pilotesService.findAll();
    return data.map((pilote) => new PiloteDto(pilote));
  }

  @Get('/:id')
  async findById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PiloteWithVolsDto | null> {
    const pilote = await this.pilotesService.findById(id);
    if (pilote) {
      return new PiloteWithVolsDto(pilote);
    }
    return null;
  }
}
