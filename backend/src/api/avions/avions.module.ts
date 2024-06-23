import { Module } from '@nestjs/common';
import { AvionsService } from './avions.service';
import { AvionsController } from './avions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Avion } from './entity/avion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Avion])],
  providers: [AvionsService],
  controllers: [AvionsController],
})
export class AvionsModule {}
