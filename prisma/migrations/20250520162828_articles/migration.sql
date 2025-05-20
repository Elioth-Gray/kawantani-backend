/*
  Warnings:

  - The primary key for the `Artikel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_verifikator` on the `Artikel` table. All the data in the column will be lost.
  - You are about to drop the column `rating_artikel` on the `Artikel` table. All the data in the column will be lost.
  - Added the required column `deskripsi_artikel` to the `Artikel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gambar_artikel` to the `Artikel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_kategori_artikel` to the `Artikel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Artikel" DROP CONSTRAINT "Artikel_id_verifikator_fkey";

-- DropForeignKey
ALTER TABLE "ArtikelDisimpan" DROP CONSTRAINT "ArtikelDisimpan_id_artikel_fkey";

-- DropForeignKey
ALTER TABLE "ArtikelDisukai" DROP CONSTRAINT "ArtikelDisukai_id_artikel_fkey";

-- DropForeignKey
ALTER TABLE "KomentarArtikel" DROP CONSTRAINT "KomentarArtikel_id_artikel_fkey";

-- AlterTable
ALTER TABLE "Artikel" DROP CONSTRAINT "Artikel_pkey",
DROP COLUMN "id_verifikator",
DROP COLUMN "rating_artikel",
ADD COLUMN     "deskripsi_artikel" TEXT NOT NULL,
ADD COLUMN     "gambar_artikel" VARCHAR(255) NOT NULL,
ADD COLUMN     "id_kategori_artikel" INTEGER NOT NULL,
ALTER COLUMN "id_artikel" DROP DEFAULT,
ALTER COLUMN "id_artikel" SET DATA TYPE VARCHAR(50),
ADD CONSTRAINT "Artikel_pkey" PRIMARY KEY ("id_artikel");
DROP SEQUENCE "Artikel_id_artikel_seq";

-- AlterTable
ALTER TABLE "ArtikelDisimpan" ALTER COLUMN "id_artikel" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ArtikelDisukai" ALTER COLUMN "id_artikel" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "KomentarArtikel" ALTER COLUMN "id_artikel" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "KategoriArtikel" (
    "id_kategori_artikel" SERIAL NOT NULL,
    "nama_kategori_artikel" VARCHAR(100) NOT NULL,

    CONSTRAINT "KategoriArtikel_pkey" PRIMARY KEY ("id_kategori_artikel")
);

-- AddForeignKey
ALTER TABLE "Artikel" ADD CONSTRAINT "Artikel_id_kategori_artikel_fkey" FOREIGN KEY ("id_kategori_artikel") REFERENCES "KategoriArtikel"("id_kategori_artikel") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtikelDisimpan" ADD CONSTRAINT "ArtikelDisimpan_id_artikel_fkey" FOREIGN KEY ("id_artikel") REFERENCES "Artikel"("id_artikel") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtikelDisukai" ADD CONSTRAINT "ArtikelDisukai_id_artikel_fkey" FOREIGN KEY ("id_artikel") REFERENCES "Artikel"("id_artikel") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KomentarArtikel" ADD CONSTRAINT "KomentarArtikel_id_artikel_fkey" FOREIGN KEY ("id_artikel") REFERENCES "Artikel"("id_artikel") ON DELETE RESTRICT ON UPDATE CASCADE;
