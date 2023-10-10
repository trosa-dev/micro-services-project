/*
  Warnings:

  - You are about to drop the column `value` on the `Payment` table. All the data in the column will be lost.
  - Added the required column `pension` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "value",
ADD COLUMN     "pension" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
