import { Pilote } from '../../src/api/pilotes/entity/pilote.entity';
import { PiloteDto } from '../../src/api/pilotes/dto/pilote.dto';
import { VOL_1, VOL_1_DTO } from '../vols/vols.fixtures';
import { AVION_1, AVION_1_DTO } from '../avions/avions.fixtures';

const PILOTE_1: Pilote = {
  numpilote: 1,
  nompilote: 'Jean Dupont    ',
  adresse: 'Paris',
};

const PILOTE_1_DTO: PiloteDto = {
  id: 1,
  nom: 'Jean Dupont',
  adresse: 'Paris',
};

const PILOTE_1_WITH_VOLS = {
  ...PILOTE_1,
  vols: [
    {
      ...VOL_1,
      avion: AVION_1,
    },
  ],
};

const PILOTE_1_WITH_VOLS_DTO = {
  ...PILOTE_1_DTO,
  vols: [
    {
      ...VOL_1_DTO,
      avion: AVION_1_DTO,
    },
  ],
};

export { PILOTE_1, PILOTE_1_DTO, PILOTE_1_WITH_VOLS, PILOTE_1_WITH_VOLS_DTO };
