-- AlterTable
ALTER TABLE "trades" ALTER COLUMN "timestamp" DROP DEFAULT,
ALTER COLUMN "timestamp" SET DATA TYPE TEXT;
