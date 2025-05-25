/*
  Warnings:

  - You are about to drop the column `id_verifikator` on the `Workshop` table. All the data in the column will be lost.
  - You are about to drop the column `lokasi_workshop` on the `Workshop` table. All the data in the column will be lost.
  - Added the required column `alaamt_lengkap_workshop` to the `Workshop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gambar_workshop` to the `Workshop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_kabupaten` to the `Workshop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lat_lokasi` to the `Workshop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `long_lokasi` to the `Workshop` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Workshop" DROP CONSTRAINT "Workshop_id_verifikator_fkey";

-- AlterTable
ALTER TABLE "Artikel" ADD COLUMN     "status_aktif" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Facilitator" ADD COLUMN     "status_aktif" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Pengguna" ADD COLUMN     "status_aktif" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Workshop" DROP COLUMN "id_verifikator",
DROP COLUMN "lokasi_workshop",
ADD COLUMN     "alaamt_lengkap_workshop" VARCHAR(100) NOT NULL,
ADD COLUMN     "gambar_workshop" VARCHAR(255) NOT NULL,
ADD COLUMN     "id_kabupaten" INTEGER NOT NULL,
ADD COLUMN     "lat_lokasi" INTEGER NOT NULL,
ADD COLUMN     "long_lokasi" INTEGER NOT NULL,
ADD COLUMN     "status_aktif" BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE "Workshop" ADD CONSTRAINT "Workshop_id_kabupaten_fkey" FOREIGN KEY ("id_kabupaten") REFERENCES "Kabupaten"("id_kabupaten") ON DELETE RESTRICT ON UPDATE CASCADE;
