/*
  Warnings:

  - You are about to drop the column `descss` on the `Project` table. All the data in the column will be lost.
  - Added the required column `desc` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Project` DROP COLUMN `descss`,
    ADD COLUMN `desc` VARCHAR(191) NOT NULL;
