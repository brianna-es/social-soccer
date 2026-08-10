import { useState } from "react";
import {
  useQuery,
  useAction,
  getMyPlayerProfile,
  updateMyPlayerProfile,
} from "wasp/client/operations";
import { QRCodeSVG } from "qrcode.react";

export function PlayerProfilePage() {
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery(getMyPlayerProfile);

  const updateProfile = useAction(updateMyPlayerProfile);

  const [editing, setEditing] = useState(false);
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [dominantFoot, setDominantFoot] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [bio, setBio] = useState("");

  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-neutral-600">
          Cargando perfil...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-red-600">
          Error al cargar el perfil.
        </p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <section className="rounded-xl bg-white p-8 shadow-md">
          <h1 className="text-2xl font-bold text-neutral-900">
            Perfil digital del jugador
          </h1>

          <p className="mt-3 text-neutral-600">
            Todavía no tienes un perfil de jugador registrado.
          </p>
        </section>
      </div>
    );
  }

  const startEditing = () => {
    setPosition(profile.position || "");
    setPhone(profile.phone || "");
    setDominantFoot(profile.dominantFoot || "");

    if (profile.birthDate) {
      setBirthDate(
        new Date(profile.birthDate).toISOString().split("T")[0],
      );
    } else {
      setBirthDate("");
    }

    setBio(profile.bio || "");
    setSaveMessage("");
    setEditing(true);
  };

  const saveProfile = async () => {
    try {
      setSaving(true);
      setSaveMessage("");

      await updateProfile({
        position,
        phone,
        dominantFoot,
        birthDate,
        bio,
      });

      setSaveMessage("Perfil actualizado correctamente.");
      setEditing(false);
    } catch (err) {
      console.error(err);
      setSaveMessage("No se pudo actualizar el perfil.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 px-4 py-10">
      <section className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg">

        <div className="text-center">
          <p className="font-bold tracking-widest text-green-600">
            SOCIAL SOCCER
          </p>

          <h1 className="mt-2 text-3xl font-bold text-neutral-900">
            Perfil digital del jugador
          </h1>

          <p className="mt-2 text-neutral-500">
            Información oficial del jugador
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-neutral-50 p-6">

          <h2 className="text-xl font-bold text-neutral-900">
            {profile.fullName}
          </h2>

          {!editing ? (
            <>
              <div className="mt-5 space-y-3">

                <p>
                  <strong>Posición:</strong>{" "}
                  {profile.position || "No registrada"}
                </p>

                <p>
                  <strong>Teléfono:</strong>{" "}
                  {profile.phone || "No registrado"}
                </p>

                <p>
                  <strong>Pie dominante:</strong>{" "}
                  {profile.dominantFoot || "No registrado"}
                </p>

                <p>
                  <strong>Fecha de nacimiento:</strong>{" "}
                  {profile.birthDate
                    ? new Date(profile.birthDate).toLocaleDateString()
                    : "No registrada"}
                </p>

                <div>
                  <strong>Biografía:</strong>

                  <p className="mt-1 text-neutral-600">
                    {profile.bio || "Sin biografía"}
                  </p>
                </div>

              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">

                <div className="rounded-lg bg-white p-4 shadow">
                  <p className="text-2xl font-bold">
                    {profile.matchesPlayed}
                  </p>

                  <p className="text-sm text-neutral-500">
                    Partidos
                  </p>
                </div>

                <div className="rounded-lg bg-white p-4 shadow">
                  <p className="text-2xl font-bold">
                    {profile.goals}
                  </p>

                  <p className="text-sm text-neutral-500">
                    Goles
                  </p>
                </div>

                <div className="rounded-lg bg-white p-4 shadow">
                  <p className="text-2xl font-bold">
                    {profile.assists}
                  </p>

                  <p className="text-sm text-neutral-500">
                    Asistencias
                  </p>
                </div>

              </div>

              <button
                onClick={startEditing}
                className="mt-6 w-full rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                ✏️ Editar mi perfil
              </button>
            </>
          ) : (
            <div className="mt-6 space-y-5">

              <div>
                <label className="mb-2 block font-semibold">
                  Posición
                </label>

                <input
                  type="text"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder="Ej. Delantero"
                  className="w-full rounded-lg border border-neutral-300 px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Teléfono
                </label>

                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej. 0991234567"
                  className="w-full rounded-lg border border-neutral-300 px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Pie dominante
                </label>

                <select
                  value={dominantFoot}
                  onChange={(e) =>
                    setDominantFoot(e.target.value)
                  }
                  className="w-full rounded-lg border border-neutral-300 px-4 py-3"
                >
                  <option value="">Seleccionar</option>
                  <option value="Derecho">Derecho</option>
                  <option value="Izquierdo">Izquierdo</option>
                  <option value="Ambos">Ambos</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Fecha de nacimiento
                </label>

                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) =>
                    setBirthDate(e.target.value)
                  }
                  className="w-full rounded-lg border border-neutral-300 px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Biografía
                </label>

                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Cuéntanos un poco sobre ti..."
                  rows={4}
                  className="w-full rounded-lg border border-neutral-300 px-4 py-3"
                />
              </div>

              <div className="flex gap-3">

                <button
                  onClick={() => setEditing(false)}
                  className="flex-1 rounded-lg border border-neutral-300 px-5 py-3 font-semibold"
                >
                  Cancelar
                </button>

                <button
                  onClick={saveProfile}
                  disabled={saving}
                  className="flex-1 rounded-lg bg-green-600 px-5 py-3 font-semibold text-white"
                >
                  {saving
                    ? "Guardando..."
                    : "💾 Guardar cambios"}
                </button>

              </div>

            </div>
          )}
        </div>

        {saveMessage && (
          <p className="mt-4 text-center font-semibold text-green-600">
            {saveMessage}
          </p>
        )}

        <div className="mt-8 border-t pt-8 text-center">

          <p className="mb-4 font-bold">
            Código QR del jugador
          </p>

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

      </section>
    </div>
  );
}
