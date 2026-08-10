import { HttpError } from "wasp/server";

export const updateMyPlayerProfile = async (
  args: {
    position?: string;
    phone?: string;
    dominantFoot?: string;
    birthDate?: string;
    bio?: string;
  },
  context: any,
) => {
  if (!context.user) {
    throw new HttpError(401, "Debes iniciar sesión.");
  }

  const profile = await context.entities.PlayerProfile.findUnique({
    where: {
      userId: context.user.id,
    },
  });

  if (!profile) {
    throw new HttpError(404, "No existe un perfil de jugador.");
  }

  return context.entities.PlayerProfile.update({
    where: {
      id: profile.id,
    },
    data: {
      position: args.position || null,
      phone: args.phone || null,
      dominantFoot: args.dominantFoot || null,
      birthDate: args.birthDate ? new Date(args.birthDate) : null,
      bio: args.bio || null,
    },
  });
};
