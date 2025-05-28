-- Drop the foreign key constraint in WorkshopTerdaftar that depends on Workshop.id_workshop
ALTER TABLE "WorkshopTerdaftar" DROP CONSTRAINT IF EXISTS "WorkshopTerdaftar_id_workshop_fkey";

-- Modify Workshop table (change PK)
ALTER TABLE "Workshop" 
  DROP CONSTRAINT "Workshop_pkey",
  ALTER COLUMN "id_workshop" SET DATA TYPE VARCHAR(50),
  ADD CONSTRAINT "Workshop_pkey" PRIMARY KEY ("id_workshop");

-- Re-add the foreign key constraint
ALTER TABLE "WorkshopTerdaftar"
  ADD CONSTRAINT "WorkshopTerdaftar_id_workshop_fkey"
  FOREIGN KEY ("id_workshop") REFERENCES "Workshop"("id_workshop") ON DELETE CASCADE;
