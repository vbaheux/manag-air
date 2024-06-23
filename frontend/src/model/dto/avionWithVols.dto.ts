import { AvionDto } from './avion.dto';
import { VolDto } from '@model/dto/vol.dto';

export interface AvionWithVolsDto extends AvionDto {
  vols: VolDto[];
}
