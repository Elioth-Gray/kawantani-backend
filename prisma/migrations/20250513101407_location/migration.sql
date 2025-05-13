/*
  Warnings:

  - Added the required column `alamat_lengkap` to the `Facilitator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_kabupaten` to the `Facilitator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Facilitator" ADD COLUMN     "alamat_lengkap" VARCHAR(255) NOT NULL,
ADD COLUMN     "id_kabupaten" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Provinsi" (
    "id_provinsi" SERIAL NOT NULL,
    "nama_provinsi" VARCHAR(100) NOT NULL,

    CONSTRAINT "Provinsi_pkey" PRIMARY KEY ("id_provinsi")
);

-- CreateTable
CREATE TABLE "Kabupaten" (
    "id_kabupaten" SERIAL NOT NULL,
    "nama_kabupaten" VARCHAR(100) NOT NULL,
    "id_provinsi" INTEGER NOT NULL,

    CONSTRAINT "Kabupaten_pkey" PRIMARY KEY ("id_kabupaten")
);

-- AddForeignKey
ALTER TABLE "Kabupaten" ADD CONSTRAINT "Kabupaten_id_provinsi_fkey" FOREIGN KEY ("id_provinsi") REFERENCES "Provinsi"("id_provinsi") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facilitator" ADD CONSTRAINT "Facilitator_id_kabupaten_fkey" FOREIGN KEY ("id_kabupaten") REFERENCES "Kabupaten"("id_kabupaten") ON DELETE RESTRICT ON UPDATE CASCADE;
