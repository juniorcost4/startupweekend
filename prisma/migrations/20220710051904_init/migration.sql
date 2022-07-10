-- CreateTable
CREATE TABLE "Candidato" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,

    CONSTRAINT "Candidato_pkey" PRIMARY KEY ("id")
);
