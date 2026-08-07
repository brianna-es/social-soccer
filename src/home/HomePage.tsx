export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">
        ⚽ Social Soccer
      </h1>

      <p className="text-lg">
        Plataforma digital para gestionar fútbol amateur.
      </p>

      <p>
        Próximamente:
      </p>

      <ul className="list-disc">
        <li>Perfil digital de jugadores</li>
        <li>Gestión de equipos y ligas</li>
        <li>Calendario de partidos</li>
        <li>Estadísticas y Fair Play</li>
      </ul>
    </div>
  );
}
