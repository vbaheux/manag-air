import { AvionDto } from '@model/dto/avion.dto';
import { PiloteDto } from '@model/dto/pilote.dto';

export interface VolDto {
  id: string;
  villeDepart?: string;
  villeArrivee?: string;
  heureDepart?: string;
  heureArrivee?: string;
  avion?: AvionDto;
  pilote?: PiloteDto;
}
