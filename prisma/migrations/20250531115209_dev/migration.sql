/*
  Warnings:

  - Added the required column `id_metode_pembayaran` to the `WorkshopTerdaftar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WorkshopTerdaftar" ADD COLUMN     "id_metode_pembayaran" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "MetodePembayaran" (
    "id_metode_pembayaran" SERIAL NOT NULL,
    "nama_metode_pembayaran" VARCHAR(100) NOT NULL,
    "gambar_metode_pembayaran" VARCHAR(50) NOT NULL,

    CONSTRAINT "MetodePembayaran_pkey" PRIMARY KEY ("id_metode_pembayaran")
);

-- AddForeignKey
ALTER TABLE "WorkshopTerdaftar" ADD CONSTRAINT "WorkshopTerdaftar_id_metode_pembayaran_fkey" FOREIGN KEY ("id_metode_pembayaran") REFERENCES "MetodePembayaran"("id_metode_pembayaran") ON DELETE RESTRICT ON UPDATE CASCADE;
