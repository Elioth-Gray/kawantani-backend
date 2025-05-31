/*
  Warnings:

  - You are about to drop the column `nama_peserta` on the `WorkshopTerdaftar` table. All the data in the column will be lost.
  - Added the required column `nama_belakang_peserta` to the `WorkshopTerdaftar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_depan_peserta` to the `WorkshopTerdaftar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WorkshopTerdaftar" DROP COLUMN "nama_peserta",
ADD COLUMN     "nama_belakang_peserta" VARCHAR(100) NOT NULL,
ADD COLUMN     "nama_depan_peserta" VARCHAR(100) NOT NULL;
