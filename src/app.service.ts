import { Injectable } from '@nestjs/common';
import { Candidato } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getCandidato() {
    return await this.prisma.candidato.findMany();
  }

  async getCandidatoById(id: string) {
    return await this.prisma.candidato.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  async setCandidato(candidato: Candidato) {
    const c = await this.prisma.candidato.create({
      data: candidato,
    });

    return c;
  }
}
