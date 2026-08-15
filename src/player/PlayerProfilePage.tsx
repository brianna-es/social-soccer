import { useState } from "react";
import {
  useQuery,
  useAction,
  getMyPlayerProfile,
  updateMyPlayerProfile,
} from "wasp/client/operations";
import { QRCodeSVG } from "qrcode.react";

function formatCalendarDate(dateValue: string | Date | null | undefined): string {
  if (!dateValue) return "No registrada";
  const str = typeof dateValue === "string" ? dateValue : dateValue.toISOString();
  const datePart = str.split("T")[0];
  if (!datePart) return "No registrada";
  const parts = datePart.split("-");
  if (parts.length !== 3) return "No registrada";
  const [year, month, day] = parts;
  if (!year || !month || !day) return "No registrada";
  return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
}

function getCalendarInputDate(dateValue: string | Date | null | undefined): string {
  if (!dateValue) return "";
  const str = typeof dateValue === "string" ? dateValue : dateValue.toISOString();
  return str.split("T")[0] || "";
}

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
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-lg font-semibold text-emerald-400 animate-pulse">
          ⚽ Cargando perfil deportivo...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center">
          <p className="text-lg font-bold text-red-400">
            Error al cargar el perfil.
          </p>
          <p className="mt-1 text-xs text-red-300">
            Por favor, reintenta más tarde o inicia sesión nuevamente.
          </p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <section className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl text-center backdrop-blur-md">
          <span className="text-4xl">⚽</span>
          <h1 className="mt-3 text-2xl font-extrabold text-white">
            Perfil digital del jugador
          </h1>
          <p className="mt-2 text-sm text-slate-300">
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
      setBirthDate(getCalendarInputDate(profile.birthDate));
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
    <div className="min-h-screen bg-slate-950 px-4 py-8 sm:py-12 text-slate-100">
      <section className="mx-auto max-w-2xl rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">

        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400">
            ⚽ Social Soccer Official Pass
          </span>

          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl tracking-tight">
            Perfil digital del jugador
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Información oficial y credencial de verificación en cancha
          </p>
        </div>

        {/* Card Body */}
        <div className="mt-8 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-6 sm:p-8">

          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-white">
                {profile.fullName}
              </h2>
              <p className="text-xs text-emerald-400 font-semibold mt-0.5">
                Jugador Verificado • {profile.position || "Posición no registrada"}
              </p>
            </div>
            <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-400">
              Activo
            </span>
          </div>

          {!editing ? (
            <>
              <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
                <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
                  <span className="text-slate-400 font-medium">Posición:</span>
                  <span className="font-semibold text-white">{profile.position || "No registrada"}</span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
                  <span className="text-slate-400 font-medium">Teléfono:</span>
                  <span className="font-semibold text-white">{profile.phone || "No registrado"}</span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
                  <span className="text-slate-400 font-medium">Pie dominante:</span>
                  <span className="font-semibold text-white">{profile.dominantFoot || "No registrado"}</span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
                  <span className="text-slate-400 font-medium">Fecha de nacimiento:</span>
                  <span className="font-semibold text-white">
                    {formatCalendarDate(profile.birthDate)}
                  </span>
                </div>

                <div className="pt-2">
                  <span className="text-slate-400 font-medium block mb-1">Biografía:</span>
                  <p className="rounded-xl bg-slate-900 p-3 text-sm text-slate-300 border border-slate-800">
                    {profile.bio || "Sin biografía registrada."}
                  </p>
                </div>
              </div>

              {/* Stats Strip */}
              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-sm">
                  <p className="text-2xl sm:text-3xl font-black text-white">
                    {profile.matchesPlayed}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-400">
                    Partidos
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-sm">
                  <p className="text-2xl sm:text-3xl font-black text-emerald-400">
                    {profile.goals}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-400">
                    Goles
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-sm">
                  <p className="text-2xl sm:text-3xl font-black text-amber-400">
                    {profile.assists}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-400">
                    Asistencias
                  </p>
                </div>
              </div>

              <button
                onClick={startEditing}
                className="mt-8 w-full rounded-xl bg-emerald-500 px-5 py-3.5 text-base font-bold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>✏️</span> Editar mi perfil
              </button>
            </>
          ) : (
            <div className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-200">
                  Posición habitual en cancha
                </label>
                <input
                  type="text"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder="Ej. Delantero / Mediocampista"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-200">
                  Teléfono de contacto
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej. 0991234567"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-200">
                  Pie dominante
                </label>
                <select
                  value={dominantFoot}
                  onChange={(e) => setDominantFoot(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                >
                  <option value="" className="bg-slate-900 text-white">Seleccionar</option>
                  <option value="Derecho" className="bg-slate-900 text-white">Derecho</option>
                  <option value="Izquierdo" className="bg-slate-900 text-white">Izquierdo</option>
                  <option value="Ambos" className="bg-slate-900 text-white">Ambos</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-200">
                  Fecha de nacimiento
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-200">
                  Biografía deportiva
                </label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Cuéntanos sobre tu trayectoria deportiva..."
                  rows={4}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="flex-1 rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  onClick={saveProfile}
                  disabled={saving}
                  className="flex-1 rounded-xl bg-emerald-500 px-5 py-3 font-bold text-slate-950 hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20 disabled:opacity-50"
                >
                  {saving ? "Guardando..." : "💾 Guardar cambios"}
                </button>
              </div>
            </div>
          )}
        </div>

        {saveMessage && (
          <p className="mt-4 text-center font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 py-2.5 rounded-xl text-sm">
            {saveMessage}
          </p>
        )}

        {/* QR Section */}
        <div className="mt-8 border-t border-slate-800 pt-8 text-center">
          <p className="mb-2 text-base font-extrabold text-white">
            Código QR de Verificación en Cancha
          </p>
          <p className="mb-6 text-xs text-slate-400">
            Escanea esta credencial desde la mesa de control o por el árbitro del partido.
          </p>

          <div className="flex justify-center">
            <div className="rounded-2xl bg-white p-5 shadow-2xl border-4 border-emerald-500/40">
              <QRCodeSVG
                value={`${window.location.origin}/verify-player/${profile.qrToken}`}
                size={180}
                level="H"
              />
            </div>
          </div>

          <p className="mt-4 font-mono text-[11px] text-slate-500 break-all">
            TOKEN: {profile.qrToken}
          </p>
        </div>

      </section>
    </div>
  );
}
