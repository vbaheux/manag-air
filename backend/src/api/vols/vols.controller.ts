import { Body, Controller, Post } from '@nestjs/common';
import { VolsService } from './vols.service';
import { ICreateVolDto } from './dto/ICreateVol.dto';
import { OCreateVolDto } from './dto/OCreateVol.dto';

@Controller('vols')
export class VolsController {
  constructor(private readonly volsService: VolsService) {}

  @Post()
  async createVol(@Body() createVolDto: ICreateVolDto): Promise<OCreateVolDto> {
    const newVol = await this.volsService.createVol(createVolDto);
    return new OCreateVolDto(newVol);
  }
}
