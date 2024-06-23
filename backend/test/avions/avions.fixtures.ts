import { AvionDto } from '../../src/api/avions/dto/avion.dto';
import { Avion } from '../../src/api/avions/entity/avion.entity';
import { VOL_1, VOL_1_DTO } from '../vols/vols.fixtures';
import { PILOTE_1, PILOTE_1_DTO } from '../pilotes/pilotes.fixtures';

const AVION_1: Avion = {
  numavion: 1,
  nomavion: 'Airbus A300   ',
  capacite: 200,
  localisation: 'Paris',
};

const AVION_1_DTO: AvionDto = {
  id: 1,
  nom: 'Airbus A300',
  capacite: 200,
  localisation: 'Paris',
};

const AVION_1_WITH_VOLS = {
  ...AVION_1,
  vols: [
    {
      ...VOL_1,
      pilote: PILOTE_1,
    },
  ],
};

const AVION_1_WITH_VOLS_DTO = {
  ...AVION_1_DTO,
  vols: [
    {
      ...VOL_1_DTO,
      pilote: PILOTE_1_DTO,
    },
  ],
};

export { AVION_1, AVION_1_DTO, AVION_1_WITH_VOLS, AVION_1_WITH_VOLS_DTO };
