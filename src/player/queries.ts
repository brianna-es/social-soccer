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
