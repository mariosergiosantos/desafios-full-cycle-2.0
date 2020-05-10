import { Controller, Get, Post, Req, Request, Param } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Maratona } from "../model/maratona.model";

@Controller('maratona')
export class MaratonaController {

    constructor(
        @InjectRepository(Maratona)
        private readonly maratonaRepo: Repository<Maratona>,
    ) { }

    @Get()
    async index() {
        return await this.maratonaRepo.find();
    }

    @Post()
    async store(@Req() request: Request) {
        const maratona = this.maratonaRepo.create(request.body as any);
        await this.maratonaRepo.save(maratona);
        return maratona;
    }
}
