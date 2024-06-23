import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Avion } from './entity/avion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AvionsService {
  constructor(
    @InjectRepository(Avion)
    private avionsRepository: Repository<Avion>,
  ) {}

  findAll(): Promise<Avion[]> {
    return this.avionsRepository.find();
  }

  findById(id: number): Promise<Avion | null> {
    return this.avionsRepository
      .createQueryBuilder('avion')
      .leftJoinAndSelect('avion.vols', 'vols')
      .leftJoinAndSelect('vols.pilote', 'pilote')
      .where({ numavion: id })
      .getOne();
  }
}
