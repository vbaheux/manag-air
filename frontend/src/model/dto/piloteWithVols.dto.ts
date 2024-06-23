import { PiloteDto } from './pilote.dto';
import { VolDto } from '@model/dto/vol.dto';

export interface PiloteWithVolsDto extends PiloteDto {
  vols: VolDto[];
}
