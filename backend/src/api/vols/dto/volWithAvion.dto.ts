import { VolDto } from './vol.dto';
import { Vol } from '../entity/vol.entity';
import { AvionDto } from '../../avions/dto/avion.dto';

export class VolWithAvionDto extends VolDto {
  readonly avion: AvionDto;
  constructor(vol: Vol) {
    super(vol);
    this.avion = new AvionDto(vol.avion);
  }
}
