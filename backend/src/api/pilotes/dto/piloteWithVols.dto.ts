import { PiloteDto } from './pilote.dto';
import { Pilote } from '../entity/pilote.entity';
import { VolWithAvionDto } from '../../vols/dto/volWithAvion.dto';

export class PiloteWithVolsDto extends PiloteDto {
  vols: VolWithAvionDto[];
  constructor(pilote: Pilote) {
    super(pilote);
    this.vols = pilote.vols?.map((vol) => new VolWithAvionDto(vol));
  }
}
