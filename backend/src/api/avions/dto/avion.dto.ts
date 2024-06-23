import { Avion } from '../entity/avion.entity';

export class AvionDto {
  readonly id!: number;
  readonly nom?: string;
  readonly capacite!: number;
  readonly localisation?: string;

  constructor(avion: Avion) {
    this.id = avion.numavion;
    this.nom = avion.nomavion ? avion.nomavion.trim() : avion.nomavion;
    this.capacite = avion.capacite;
    this.localisation = avion.localisation;
  }
}
