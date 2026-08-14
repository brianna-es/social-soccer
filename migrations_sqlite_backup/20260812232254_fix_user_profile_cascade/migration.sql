-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PlayerProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    "position" TEXT,
    "phone" TEXT,
    "qrToken" TEXT NOT NULL,
    "photoUrl" TEXT,
    "dominantFoot" TEXT,
    "birthDate" DATETIME,
    "bio" TEXT,
    "goals" INTEGER NOT NULL DEFAULT 0,
    "assists" INTEGER NOT NULL DEFAULT 0,
    "matchesPlayed" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    CONSTRAINT "PlayerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_PlayerProfile" ("assists", "bio", "birthDate", "dominantFoot", "fullName", "goals", "id", "matchesPlayed", "phone", "photoUrl", "position", "qrToken", "userId") SELECT "assists", "bio", "birthDate", "dominantFoot", "fullName", "goals", "id", "matchesPlayed", "phone", "photoUrl", "position", "qrToken", "userId" FROM "PlayerProfile";
DROP TABLE "PlayerProfile";
ALTER TABLE "new_PlayerProfile" RENAME TO "PlayerProfile";
CREATE UNIQUE INDEX "PlayerProfile_qrToken_key" ON "PlayerProfile"("qrToken");
CREATE UNIQUE INDEX "PlayerProfile_userId_key" ON "PlayerProfile"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
