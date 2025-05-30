/*
  Warnings:

  - The primary key for the `Tanaman` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TanamanPengguna` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `tanggal_komentar` to the `KomentarArtikel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_kategori_tanaman` to the `Tanaman` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "HariPenanaman" DROP CONSTRAINT "HariPenanaman_id_tanaman_fkey";

-- DropForeignKey
ALTER TABLE "HariTanamanPengguna" DROP CONSTRAINT "HariTanamanPengguna_id_tanaman_pengguna_fkey";

-- DropForeignKey
ALTER TABLE "InstruksiTanaman" DROP CONSTRAINT "InstruksiTanaman_id_tanaman_fkey";

-- DropForeignKey
ALTER TABLE "TanamanPengguna" DROP CONSTRAINT "TanamanPengguna_id_tanaman_fkey";

-- DropForeignKey
ALTER TABLE "WorkshopTerdaftar" DROP CONSTRAINT "WorkshopTerdaftar_id_workshop_fkey";

-- AlterTable
ALTER TABLE "HariPenanaman" ALTER COLUMN "id_tanaman" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "HariTanamanPengguna" ALTER COLUMN "id_tanaman_pengguna" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "InstruksiTanaman" ALTER COLUMN "id_tanaman" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "KomentarArtikel" ADD COLUMN     "tanggal_komentar" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Tanaman" DROP CONSTRAINT "Tanaman_pkey",
ADD COLUMN     "id_kategori_tanaman" INTEGER NOT NULL,
ALTER COLUMN "id_tanaman" DROP DEFAULT,
ALTER COLUMN "id_tanaman" SET DATA TYPE VARCHAR,
ADD CONSTRAINT "Tanaman_pkey" PRIMARY KEY ("id_tanaman");
DROP SEQUENCE "Tanaman_id_tanaman_seq";

-- AlterTable
ALTER TABLE "TanamanPengguna" DROP CONSTRAINT "TanamanPengguna_pkey",
ALTER COLUMN "id_tanaman_pengguna" DROP DEFAULT,
ALTER COLUMN "id_tanaman_pengguna" SET DATA TYPE VARCHAR,
ALTER COLUMN "id_tanaman" SET DATA TYPE TEXT,
ADD CONSTRAINT "TanamanPengguna_pkey" PRIMARY KEY ("id_tanaman_pengguna");
DROP SEQUENCE "TanamanPengguna_id_tanaman_pengguna_seq";

-- CreateTable
CREATE TABLE "kategoriTanaman" (
    "id_kategori_tanaman" SERIAL NOT NULL,
    "nama_kategori_tanaman" VARCHAR NOT NULL,

    CONSTRAINT "kategoriTanaman_pkey" PRIMARY KEY ("id_kategori_tanaman")
);

-- AddForeignKey
ALTER TABLE "WorkshopTerdaftar" ADD CONSTRAINT "WorkshopTerdaftar_id_workshop_fkey" FOREIGN KEY ("id_workshop") REFERENCES "Workshop"("id_workshop") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tanaman" ADD CONSTRAINT "Tanaman_id_kategori_tanaman_fkey" FOREIGN KEY ("id_kategori_tanaman") REFERENCES "kategoriTanaman"("id_kategori_tanaman") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstruksiTanaman" ADD CONSTRAINT "InstruksiTanaman_id_tanaman_fkey" FOREIGN KEY ("id_tanaman") REFERENCES "Tanaman"("id_tanaman") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HariPenanaman" ADD CONSTRAINT "HariPenanaman_id_tanaman_fkey" FOREIGN KEY ("id_tanaman") REFERENCES "Tanaman"("id_tanaman") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TanamanPengguna" ADD CONSTRAINT "TanamanPengguna_id_tanaman_fkey" FOREIGN KEY ("id_tanaman") REFERENCES "Tanaman"("id_tanaman") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HariTanamanPengguna" ADD CONSTRAINT "HariTanamanPengguna_id_tanaman_pengguna_fkey" FOREIGN KEY ("id_tanaman_pengguna") REFERENCES "TanamanPengguna"("id_tanaman_pengguna") ON DELETE RESTRICT ON UPDATE CASCADE;
