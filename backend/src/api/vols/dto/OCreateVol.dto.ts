import { VolWithAvionDto } from './volWithAvion.dto';
import { VolWithPiloteDto } from './volWithPilote.dto';
import { AvionDto } from '../../avions/dto/avion.dto';
import { PiloteDto } from '../../pilotes/dto/pilote.dto';
import { Vol } from '../entity/vol.entity';

export class OCreateVolDto implements VolWithAvionDto, VolWithPiloteDto {
  readonly id: string;
  readonly villeDepart: string;
  readonly villeArrivee: string;
  readonly heureDepart: string;
  readonly heureArrivee: string;
  readonly pilote: PiloteDto;
  readonly avion: AvionDto;

  constructor(vol: Vol) {
    this.id = vol.numvol;
    this.villeDepart = vol.villedep;
    this.villeArrivee = vol.villearr;
    this.heureDepart = vol.heuredep;
    this.heureArrivee = vol.heurearr;
    this.pilote = new PiloteDto(vol.pilote);
    this.avion = new AvionDto(vol.avion);
  }
}
