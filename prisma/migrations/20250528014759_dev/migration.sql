-- AlterTable
ALTER TABLE "Artikel" ALTER COLUMN "status_verifikasi" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Workshop" ALTER COLUMN "status_verifikasi" SET DEFAULT false,
ALTER COLUMN "lat_lokasi" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "long_lokasi" SET DATA TYPE DOUBLE PRECISION;
