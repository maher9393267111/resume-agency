-- DropIndex
DROP INDEX `About_userId_fkey` ON `About`;

-- DropIndex
DROP INDEX `Appearence_userId_fkey` ON `Appearence`;

-- DropIndex
DROP INDEX `Education_userId_fkey` ON `Education`;

-- DropIndex
DROP INDEX `Project_userId_fkey` ON `Project`;

-- DropIndex
DROP INDEX `Slider_userId_fkey` ON `Slider`;

-- DropIndex
DROP INDEX `Social_userId_fkey` ON `Social`;

-- AlterTable
ALTER TABLE `About` ADD COLUMN `temp` INTEGER NOT NULL DEFAULT 1;
