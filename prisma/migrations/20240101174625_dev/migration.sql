/*
  Warnings:

  - You are about to drop the column `desc` on the `Project` table. All the data in the column will be lost.
  - Added the required column `descss` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Project` DROP COLUMN `desc`,
    ADD COLUMN `descss` VARCHAR(191) NOT NULL;
