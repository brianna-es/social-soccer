import { useParams } from "react-router";
import { useQuery } from "wasp/client/operations";
import { getPlayerByQrToken } from "wasp/client/operations";

export function PlayerVerificationPage() {
  const { qrToken } = useParams<"qrToken">();

  const { data: player, isLoading, error } = useQuery(
    getPlayerByQrToken,
    { qrToken: qrToken || "" },
  );

  if (!qrToken) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>❌ Código QR inválido</h2>
        <p>No se encontró el código del jugador.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Verificando jugador...</h2>
        <p>Por favor espera.</p>
      </div>
    );
  }

  if (error || !player) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>❌ Jugador no encontrado</h2>
        <p>El código QR no es válido o el jugador no existe.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "3rem auto",
        padding: "2rem",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "12px",
      }}
    >
      <h1>⚽ Social Soccer</h1>

      <h2>✅ Jugador verificado</h2>

      {player.photoUrl && (
        <img
          src={player.photoUrl}
          alt={player.fullName}
          style={{
            width: "140px",
            height: "140px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      )}

      <h2>{player.fullName}</h2>

      {player.position && <p>Posición: {player.position}</p>}

      {player.dominantFoot && (
        <p>Pie dominante: {player.dominantFoot}</p>
      )}

      <hr />

      <h3>Estadísticas</h3>

      <p>⚽ Goles: {player.goals}</p>
      <p>🎯 Asistencias: {player.assists}</p>
      <p>🏟️ Partidos jugados: {player.matchesPlayed}</p>

      <p style={{ marginTop: "2rem", color: "green", fontWeight: "bold" }}>
        ✓ Identidad digital verificada
      </p>
    </div>
  );
}