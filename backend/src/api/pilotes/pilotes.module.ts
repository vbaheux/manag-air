import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pilote } from './entity/pilote.entity';
import { PilotesController } from './pilotes.controller';
import { PilotesService } from './pilotes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pilote])],
  providers: [PilotesService],
  controllers: [PilotesController],
  exports: [TypeOrmModule],
})
export class PilotesModule {}
