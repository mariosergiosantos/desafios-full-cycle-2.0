import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Maratona } from './model/maratona.model';
import { MaratonaModule } from './maratona/maratona.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Maratona],
   }),
    MaratonaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
