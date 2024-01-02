/*
  Warnings:

  - Made the column `title` on table `About` required. This step will fail if there are existing NULL values in that column.
  - Made the column `desc` on table `About` required. This step will fail if there are existing NULL values in that column.
  - Made the column `link` on table `About` required. This step will fail if there are existing NULL values in that column.
  - Made the column `headImage` on table `About` required. This step will fail if there are existing NULL values in that column.
  - Made the column `myImage` on table `About` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `About` MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `desc` VARCHAR(191) NOT NULL,
    MODIFY `link` VARCHAR(191) NOT NULL,
    MODIFY `headImage` VARCHAR(191) NOT NULL,
    MODIFY `myImage` VARCHAR(191) NOT NULL;
