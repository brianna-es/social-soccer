import { HttpError } from "wasp/server";

export const getMyPlayerProfile = async (_args: unknown, context: any) => {
  if (!context.user) {
    throw new HttpError(401, "Debes iniciar sesión.");
  }

  return context.entities.PlayerProfile.findUnique({
    where: {
      userId: context.user.id,
    },
  });
};

export const getPlayerByQrToken = async (
  args: { qrToken: string },
  context: any,
) => {
  if (!args.qrToken) {
    throw new HttpError(400, "Token QR requerido.");
  }

  const player = await context.entities.PlayerProfile.findUnique({
    where: {
      qrToken: args.qrToken,
    },
    select: {
      fullName: true,
      position: true,
      photoUrl: true,
      dominantFoot: true,
      goals: true,
      assists: true,
      matchesPlayed: true,
      qrToken: true,
    },
  });

  if (!player) {
    throw new HttpError(404, "Jugador no encontrado.");
  }

  return player;
};
