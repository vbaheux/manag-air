import { VolDto } from './vol.dto';
import { Vol } from '../entity/vol.entity';
import { PiloteDto } from '../../pilotes/dto/pilote.dto';

export class VolWithPiloteDto extends VolDto {
  readonly pilote: PiloteDto;

  constructor(vol: Vol) {
    super(vol);
    this.pilote = new PiloteDto(vol.pilote);
  }
}
