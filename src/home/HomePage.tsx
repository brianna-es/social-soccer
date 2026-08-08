export function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-600">
          Social Soccer
        </p>

        <h1 className="text-4xl font-bold text-neutral-900">
          Fútbol amateur, organizado en un solo lugar.
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-neutral-600">
          Plataforma digital para gestionar jugadores, equipos, ligas,
          partidos, estadísticas, pagos y Fair Play.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-neutral-900">
          Módulos de Social Soccer
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="card p-5">
            <h3 className="text-lg font-semibold">⚽ Jugadores</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Perfil digital e identidad del jugador.
            </p>
          </div>

          <div className="card p-5">
            <h3 className="text-lg font-semibold">🏆 Ligas y equipos</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Organización de equipos, ligas y divisiones.
            </p>
          </div>

          <div className="card p-5">
            <h3 className="text-lg font-semibold">📅 Partidos</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Gestión de partidos, eventos y reportes.
            </p>
          </div>

          <div className="card p-5">
            <h3 className="text-lg font-semibold">💳 Pagos</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Registro de transacciones y estados de pago.
            </p>
          </div>

          <div className="card p-5">
            <h3 className="text-lg font-semibold">📊 Estadísticas</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Información relacionada con el rendimiento de los partidos.
            </p>
          </div>

          <div className="card p-5">
            <h3 className="text-lg font-semibold">🤝 Fair Play</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Seguimiento de la puntuación de Fair Play de los jugadores.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
