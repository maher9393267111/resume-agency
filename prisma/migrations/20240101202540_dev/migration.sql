/*
  Warnings:

  - Added the required column `headImage` to the `About` table without a default value. This is not possible if the table is not empty.
  - Added the required column `myImage` to the `About` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `About` ADD COLUMN `headImage` VARCHAR(191) NOT NULL,
    ADD COLUMN `myImage` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `role` VARCHAR(191) NOT NULL DEFAULT 'user';
