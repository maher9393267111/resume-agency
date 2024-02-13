/*
  Warnings:

  - You are about to drop the column `status2` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "About" ALTER COLUMN "desc" SET DATA TYPE VARCHAR(2500);

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "desc" SET DATA TYPE VARCHAR(855);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "status2",
ADD COLUMN     "status4" TEXT NOT NULL DEFAULT 'pending';
