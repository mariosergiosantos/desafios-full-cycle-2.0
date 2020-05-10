import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Maratona } from "../model/maratona.model";
import { ConfigService } from "@nestjs/config";
import { MaratonaController } from './maratona.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Maratona]),
    ],
    controllers: [
        MaratonaController
    ],
    providers: [
        ConfigService
    ]
})
export class MaratonaModule { }
