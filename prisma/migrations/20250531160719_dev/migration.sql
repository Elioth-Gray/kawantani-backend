/*
  Warnings:

  - Added the required column `jenis_kelamin_peserta` to the `WorkshopTerdaftar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WorkshopTerdaftar" ADD COLUMN     "jenis_kelamin_peserta" INTEGER NOT NULL;
