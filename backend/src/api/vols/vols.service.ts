import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vol } from './entity/vol.entity';
import { Repository } from 'typeorm';
import { ICreateVolDto } from './dto/ICreateVol.dto';

@Injectable()
export class VolsService {
  constructor(
    @InjectRepository(Vol)
    private volsRepository: Repository<Vol>,
  ) {}

  findById(id: string): Promise<Vol | null> {
    return this.volsRepository
      .createQueryBuilder('vols')
      .leftJoinAndSelect('vols.pilote', 'pilote')
      .leftJoinAndSelect('vols.avion', 'avion')
      .where({ numvol: id })
      .getOne();
  }

  async createVol({
    id,
    villeDepart,
    villeArrivee,
    heureDepart,
    heureArrivee,
    piloteId,
    avionId,
  }: ICreateVolDto): Promise<Vol> {
    const vol = this.volsRepository.create({
      numvol: id,
      villedep: villeDepart,
      villearr: villeArrivee,
      heuredep: heureDepart,
      heurearr: heureArrivee,
      numpilote: piloteId,
      numavion: avionId,
    });
    await this.volsRepository.insert(vol);
    return this.findById(id);
  }
}
