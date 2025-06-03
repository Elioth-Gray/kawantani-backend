-- AlterTable
ALTER TABLE "Workshop" ADD COLUMN     "waktu_berakhir" VARCHAR(100) NOT NULL DEFAULT '16:00',
ADD COLUMN     "waktu_mulai" VARCHAR(100) NOT NULL DEFAULT '08:00';
