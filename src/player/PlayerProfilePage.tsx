import { useQuery, getMyPlayerProfile } from "wasp/client/operations";
import { useAuth } from "wasp/client/auth";
import { QRCodeSVG } from "qrcode.react";

export function PlayerProfilePage() {
  const { data: user, isLoading: authLoading } = useAuth();

  const {
    data: profile,
    isLoading: profileLoading,
    error,
  } = useQuery(getMyPlayerProfile, {
    enabled: !!user,
  });

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Cargando...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <section className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900">
            Debes iniciar sesión
          </h1>

          <p className="mt-3 text-neutral-600">
            Inicia sesión para ver tu perfil de jugador.
          </p>
        </section>
      </div>
    );
  }

  if (profileLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Cargando perfil...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <section className="text-center">
          <h1 className="text-2xl font-bold text-red-600">
            Error al cargar el perfil
          </h1>

          <p className="mt-3 text-neutral-600">
            No se pudo cargar la información del jugador.
          </p>
        </section>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <section className="text-center">
          <h1 className="text-3xl font-bold text-neutral-900">
            Perfil digital del jugador
          </h1>

          <p className="mt-3 text-neutral-600">
            Todavía no tienes un perfil de jugador registrado.
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="mx-auto max-w-2xl px-6 py-10">
        <h1 className="mt-2 text-3xl font-bold text-neutral-900">
          Perfil digital del jugador
        </h1>

        <div className="mt-6 space-y-3">
          <p>
            <strong>Nombre:</strong> {profile.fullName}
          </p>

          <p>
            <strong>Posición:</strong>{" "}
            {profile.position || "No registrada"}
          </p>

          <p>
            <strong>Teléfono:</strong>{" "}
            {profile.phone || "No registrado"}
          </p>

          <div className="pt-4 text-center">
            <p className="mb-3 font-semibold">Código QR del jugador</p>

            <div className="flex justify-center">
              <QRCodeSVG
                value={profile.qrToken}
                size={200}
                level="H"
              />
            </div>

            <p className="mt-3 break-all text-xs text-neutral-500">
              {profile.qrToken}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
