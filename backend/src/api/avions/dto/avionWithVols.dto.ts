import { AvionDto } from './avion.dto';
import { Avion } from '../entity/avion.entity';
import { VolWithPiloteDto } from '../../vols/dto/volWithPilote.dto';

export class AvionWithVolsDto extends AvionDto {
  vols: VolWithPiloteDto[];
  constructor(avion: Avion) {
    super(avion);
    this.vols = avion.vols?.map((vol) => new VolWithPiloteDto(vol));
  }
}
