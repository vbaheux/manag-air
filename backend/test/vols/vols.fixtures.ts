import { Vol } from '../../src/api/vols/entity/vol.entity';
import { VolDto } from '../../src/api/vols/dto/vol.dto';
import { ICreateVolDto } from '../../src/api/vols/dto/ICreateVol.dto';
import { OCreateVolDto } from '../../src/api/vols/dto/OCreateVol.dto';
import { PILOTE_1, PILOTE_1_DTO } from '../pilotes/pilotes.fixtures';
import { AVION_1, AVION_1_DTO } from '../avions/avions.fixtures';

const VOL_1: Vol = {
  numvol: 'AF0001',
  villedep: 'Paris',
  villearr: 'Johannesbourg',
  heuredep: '06:00',
  heurearr: '13:31',
} as Vol;

const VOL_1_DTO: VolDto = {
  id: 'AF0001',
  villeDepart: 'Paris',
  villeArrivee: 'Johannesbourg',
  heureDepart: '06:00',
  heureArrivee: '13:31',
};

const VOL_2_I_CREATE_DTO: ICreateVolDto = {
  id: 'AF0002',
  villeDepart: 'Lyon',
  villeArrivee: 'Johannesbourg',
  heureDepart: '07:00',
  heureArrivee: '14:31',
  piloteId: 1,
  avionId: 1,
};

const VOL_2: Vol = {
  numvol: 'AF0002',
  villedep: 'Lyon',
  villearr: 'Johannesbourg',
  heuredep: '07:00',
  heurearr: '14:31',
  pilote: PILOTE_1,
  avion: AVION_1,
} as Vol;

const VOL_2_O_CREATE_DTO: OCreateVolDto = {
  id: 'AF0002',
  villeDepart: 'Lyon',
  villeArrivee: 'Johannesbourg',
  heureDepart: '07:00',
  heureArrivee: '14:31',
  pilote: PILOTE_1_DTO,
  avion: AVION_1_DTO,
};

const VOL_BAD_REQUEST_ERROR = {
  message: [
    'id must match /^[A-Z]{2}\\d{4}$/ regular expression',
    'id must be a string',
    'villeDepart must be shorter than or equal to 20 characters',
    'villeDepart must be a string',
    'villeArrivee must be shorter than or equal to 20 characters',
    'villeArrivee must be a string',
    'heureDepart must match /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ regular expression',
    'heureDepart must be a string',
    'heureArrivee must match /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ regular expression',
    'heureArrivee must be a string',
    'piloteId must be an integer number',
    'avionId must be an integer number',
  ],
  error: 'Bad Request',
  statusCode: 400,
};

export {
  VOL_1,
  VOL_1_DTO,
  VOL_2_I_CREATE_DTO,
  VOL_2,
  VOL_2_O_CREATE_DTO,
  VOL_BAD_REQUEST_ERROR,
};
