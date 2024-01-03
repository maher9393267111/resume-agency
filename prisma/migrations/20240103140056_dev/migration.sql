/*
  Warnings:

  - You are about to drop the column `textColor` on the `Slider` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `About` ADD COLUMN `textColor` VARCHAR(191) NOT NULL DEFAULT '#000000';

-- AlterTable
ALTER TABLE `Slider` DROP COLUMN `textColor`;
