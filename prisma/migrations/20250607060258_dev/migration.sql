/*
  Warnings:

  - Changed the type of `status_verifikasi` on the `Artikel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status_verifikasi` on the `Workshop` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "StatusVerifikasiArtikel" AS ENUM ('MENUNGGU', 'DIVERIFIKASI', 'DITOLAK');

-- CreateEnum
CREATE TYPE "StatusVerifikasiWorkshop" AS ENUM ('MENUNGGU', 'DIVERIFIKASI', 'DITOLAK');

-- AlterTable
ALTER TABLE "Artikel" DROP COLUMN "status_verifikasi",
ADD COLUMN     "status_verifikasi" "StatusVerifikasiArtikel" NOT NULL;

-- AlterTable
ALTER TABLE "Workshop" DROP COLUMN "status_verifikasi",
ADD COLUMN     "status_verifikasi" "StatusVerifikasiWorkshop" NOT NULL;
