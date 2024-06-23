import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pilote } from './entity/pilote.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PilotesService {
  constructor(
    @InjectRepository(Pilote)
    private pilotesRepository: Repository<Pilote>,
  ) {}

  findAll(): Promise<Pilote[]> {
    return this.pilotesRepository.find();
  }

  findById(id: number): Promise<Pilote | null> {
    return this.pilotesRepository
      .createQueryBuilder('pilote')
      .leftJoinAndSelect('pilote.vols', 'vols')
      .leftJoinAndSelect('vols.avion', 'avion')
      .where({ numpilote: id })
      .getOne();
  }
}
