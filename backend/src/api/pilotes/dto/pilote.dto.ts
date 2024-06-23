import { Pilote } from '../entity/pilote.entity';

export class PiloteDto {
  readonly id!: number;
  readonly nom?: string;
  readonly adresse?: string;

  constructor(pilote: Pilote) {
    this.id = pilote.numpilote;
    this.nom = pilote.nompilote ? pilote.nompilote.trim() : pilote.nompilote;
    this.adresse = pilote.adresse;
  }
}
