import type { OnAfterSignupHook } from "wasp/server/auth";

export const onAfterSignup: OnAfterSignupHook = async ({
  user,
  prisma,
}) => {
  await prisma.playerProfile.create({
    data: {
      fullName: user.username,
      userId: user.id,
      qrToken: `PLAYER-${user.id}`,
    },
  });
};
