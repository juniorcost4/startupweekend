import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Candidato } from '@prisma/client';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/candidatos')
  getCandidato() {
    return this.appService.getCandidato();
  }

  @Get('/candidatos/:id')
  getCandidatoById(@Param() params: any) {
    const { id } = params;
    return this.appService.getCandidatoById(id);
  }

  @Post('/candidatos')
  candidato(@Body() candidato: Candidato) {
    return this.appService.setCandidato(candidato);
  }
}
