import { Vol } from '../entity/vol.entity';

export class VolDto {
  readonly id!: string;
  readonly villeDepart?: string;
  readonly villeArrivee?: string;
  readonly heureDepart?: string;
  readonly heureArrivee?: string;

  constructor(vol: Vol) {
    this.id = vol.numvol;
    this.villeDepart = vol.villedep;
    this.villeArrivee = vol.villearr;
    this.heureDepart = vol.heuredep;
    this.heureArrivee = vol.heurearr;
  }
}
