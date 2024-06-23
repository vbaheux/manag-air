import { Module } from '@nestjs/common';
import { VolsController } from './vols.controller';
import { VolsService } from './vols.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vol } from './entity/vol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vol])],
  controllers: [VolsController],
  providers: [VolsService],
  exports: [TypeOrmModule],
})
export class VolsModule {}
