import { useQuery, getMyPlayerProfile } from "wasp/client/operations";

export function PlayerProfilePage() {
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery(getMyPlayerProfile);

  if (isLoading) {
    return <p>Cargando perfil...</p>;
  }

  if (error) {
    return <p>Error al cargar el perfil.</p>;
  }

  if (!profile) {
    return (
      <section className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
          Social Soccer
        </p>

        <h1 className="mt-2 text-3xl font-bold text-neutral-900">
          Perfil digital del jugador
        </h1>

        <p className="mt-3 text-neutral-600">
          Todavía no tienes un perfil de jugador registrado.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
        Social Soccer
      </p>

      <h1 className="mt-2 text-3xl font-bold text-neutral-900">
        Perfil digital del jugador
      </h1>

      <div className="mt-6 space-y-3">
        <p>
          <strong>Nombre:</strong> {profile.fullName}
        </p>

        <p>
          <strong>Posición:</strong> {profile.position || "No registrada"}
        </p>

        <p>
          <strong>Teléfono:</strong> {profile.phone || "No registrado"}
        </p>

        <p>
          <strong>QR:</strong> {profile.qrToken}
        </p>
      </div>
    </section>
  );
}
