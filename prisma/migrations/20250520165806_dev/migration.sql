/*
  Warnings:

  - Changed the type of `status_artikel` on the `Artikel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "StatusArtikel" AS ENUM ('DRAFT', 'PUBLISHED');

-- AlterTable
ALTER TABLE "Artikel" DROP COLUMN "status_artikel",
ADD COLUMN     "status_artikel" "StatusArtikel" NOT NULL;
