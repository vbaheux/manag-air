import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { PilotesModule } from './api/pilotes/pilotes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { Pilote } from './api/pilotes/entity/pilote.entity';
import { Avion } from './api/avions/entity/avion.entity';
import { Vol } from './api/vols/entity/vol.entity';
import { AvionsModule } from './api/avions/avions.module';
import { VolsModule } from './api/vols/vols.module';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmExceptionFilter } from './common/error/typeOrmException.filter';
import * as process from 'process';
import { LoggerMiddleware } from './common/logger/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        process.env.NODE_ENV === 'development' ? '.env.local' : '.env',
      ],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT')) || 3306,
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Pilote, Avion, Vol],
        charset: 'utf8mb4',
      }),
    }),
    TerminusModule,
    PilotesModule,
    AvionsModule,
    VolsModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: TypeOrmExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).exclude('api/*').forRoutes('*');
  }
}
