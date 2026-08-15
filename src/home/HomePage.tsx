import { useAuth } from "wasp/client/auth";
import { Link } from "wasp/client/router";

export function HomePage() {
  const { data: user } = useAuth();

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100 min-h-screen">
      {/* Dynamic Background Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 -z-10 h-[400px] w-[500px] rounded-full bg-emerald-600/10 blur-[100px]" />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-400 backdrop-blur-md shadow-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Plataforma N°1 para Fútbol Amateur</span>
          </div>

          {/* Main Title */}
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
            El fútbol amateur,{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
              organizado y profesional.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
            Social Soccer digitaliza tu liga y tu perfil de jugador. Gestiona plantillas, estadísticas en tiempo real, carnets digitales con verificación QR, calendarios y control de pagos.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {user ? (
              <Link
                to="/player-profile"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-8 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95"
              >
                <span>👤</span> Ver mi perfil digital
              </Link>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-8 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95"
                >
                  <span>⚡</span> Crear mi perfil
                </Link>
                <Link
                  to="/login"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-8 py-3.5 text-base font-semibold text-slate-200 backdrop-blur-sm transition-all hover:bg-slate-800 hover:text-white hover:border-slate-600"
                >
                  <span>🔑</span> Iniciar sesión
                </Link>
              </>
            )}
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl border-t border-slate-800/80 pt-10 text-center">
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">+5.000</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400">Jugadores registrados</p>
            </div>
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">+350</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400">Equipos & Ligas</p>
            </div>
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">100%</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400">Verificación QR en cancha</p>
            </div>
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-extrabold text-teal-300">Fair Play</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400">Seguimiento ético</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Spotlight: Digital Profile & QR Code */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 border-t border-slate-800/60">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4 border border-emerald-500/20">
              🆔 Identidad Digital Unificada
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Perfil Digital del Jugador & Código QR en Cancha
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Cada jugador cuenta con una credencial digital oficial infalsificable. Elimina las planillas impresas y la suplantación de identidad en los torneos.
            </p>

            <ul className="mt-8 space-y-4 text-slate-300 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs">✓</span>
                <span><strong>Ficha deportiva completa:</strong> Posición, pie dominante, historial de goles, asistencias y partidos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs">✓</span>
                <span><strong>Verificación QR instantánea:</strong> Árbitros y mesas de control verifican la identidad escaneando desde cualquier dispositivo.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs">✓</span>
                <span><strong>Actualización en tiempo real:</strong> Las estadísticas se vinculan automáticamente tras cada partido finalizado.</span>
              </li>
            </ul>

            <div className="mt-8">
              {user ? (
                <Link
                  to="/player-profile"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-800 border border-slate-700 px-6 py-3 text-sm font-semibold text-emerald-400 hover:bg-slate-700 hover:text-emerald-300 transition-all"
                >
                  Ir a mi credencial QR ➔
                </Link>
              ) : (
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20"
                >
                  Obtener mi credencial QR ➔
                </Link>
              )}
            </div>
          </div>

          {/* Right Column: Visual Player Card Mockup */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 blur-xl"></div>
            
            <div className="relative rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-slate-950 font-black text-xl shadow-lg">
                    ⚽
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest text-emerald-400">Credencial Oficial</p>
                    <p className="text-lg font-bold text-white">Social Soccer Pass</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-400">
                  Activo
                </span>
              </div>

              {/* Player Info Preview */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-6">
                <div className="relative">
                  <div className="h-24 w-24 rounded-2xl bg-slate-800 border-2 border-emerald-500/40 flex items-center justify-center text-4xl shadow-inner">
                    🏃‍♂️
                  </div>
                  <div className="absolute -bottom-2 -right-2 rounded-lg bg-emerald-500 px-2 py-0.5 text-[10px] font-black text-slate-950">
                    N° 10
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-extrabold text-white">Matías Silva</h3>
                  <p className="text-sm font-medium text-emerald-400">Mediocampista / Volante Creativo</p>
                  <p className="text-xs text-slate-400 mt-1">Pie Dominante: Derecho • Dep. La Red FC</p>
                </div>
              </div>

              {/* Stats Grid inside Card */}
              <div className="mt-6 grid grid-cols-3 gap-3 text-center bg-slate-950/60 rounded-xl p-4 border border-slate-800">
                <div>
                  <p className="text-xs text-slate-400">Partidos</p>
                  <p className="text-xl font-black text-white mt-0.5">28</p>
                </div>
                <div className="border-x border-slate-800">
                  <p className="text-xs text-slate-400">Goles</p>
                  <p className="text-xl font-black text-emerald-400 mt-0.5">14</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Asistencias</p>
                  <p className="text-xl font-black text-amber-400 mt-0.5">9</p>
                </div>
              </div>

              {/* QR Code Demo Visual */}
              <div className="mt-6 flex items-center justify-between rounded-xl bg-white p-4 text-slate-900">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Escaneo de Mesa</p>
                  <p className="text-sm font-bold text-slate-900">Código QR de Validación</p>
                  <p className="text-[11px] text-slate-500 font-mono">TOKEN: QR-SS-84920</p>
                </div>
                <div className="h-16 w-16 bg-slate-900 rounded-lg p-1.5 flex items-center justify-center text-white shrink-0">
                  {/* Decorative QR Pattern SVG */}
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
                    <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm8-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm11-2h2v2h-2v-2zm-3 2h2v2h-2v-2zm5 0h2v2h-2v-2zm-2 2h2v2h-2v-2zm-3 2h2v2h-2v-2zm5 0h2v2h-2v-2zm-2-6h2v2h-2v-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 border-t border-slate-800/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-lg bg-amber-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 border border-amber-400/20">
            ⚙️ Módulos Integrados
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Todo lo que tu torneo necesita en una sola plataforma
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Diseñado para simplificar el trabajo de organizadores, delegados, árbitros y jugadores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Module 1: Jugadores */}
          <div className="card p-7 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 text-2xl mb-5 border border-emerald-500/20">
                ⚽
              </div>
              <h3 className="text-xl font-bold text-white flex items-center justify-between">
                Jugadores
                <span className="text-xs font-normal text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">Carnet QR</span>
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Perfil digital e identidad del jugador. Carnet deportivo unificado con datos personales, posición, foto y validación por QR en cancha.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs font-medium text-emerald-400">
              Verificación anti-suplantación ➔
            </div>
          </div>

          {/* Module 2: Ligas y Equipos */}
          <div className="card p-7 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 text-2xl mb-5 border border-amber-500/20">
                🏆
              </div>
              <h3 className="text-xl font-bold text-white flex items-center justify-between">
                Equipos y Ligas
                <span className="text-xs font-normal text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">Torneos</span>
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Organización de equipos, categorías y divisiones. Registro de delegados, gestión de plantillas de jugadores y tablas de posiciones.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs font-medium text-amber-400">
              Fixtures & Clasificación automatizados ➔
            </div>
          </div>

          {/* Module 3: Partidos */}
          <div className="card p-7 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 text-2xl mb-5 border border-blue-500/20">
                📅
              </div>
              <h3 className="text-xl font-bold text-white flex items-center justify-between">
                Partidos & Fixture
                <span className="text-xs font-normal text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">En Vivo</span>
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Gestión de partidos, asignación de canchas, horarios, actas arbitrales digitales y publicación instantánea de resultados.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs font-medium text-blue-400">
              Reportes & cronograma digital ➔
            </div>
          </div>

          {/* Module 4: Estadísticas */}
          <div className="card p-7 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 text-2xl mb-5 border border-purple-500/20">
                📊
              </div>
              <h3 className="text-xl font-bold text-white flex items-center justify-between">
                Estadísticas
                <span className="text-xs font-normal text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">Métricas</span>
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Información detallada del rendimiento: goleadores, máximos asistentes, partidos jugados, minutos y vallas menos vencidas.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs font-medium text-purple-400">
              Rankings individuales y grupales ➔
            </div>
          </div>

          {/* Module 5: Pagos */}
          <div className="card p-7 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 text-2xl mb-5 border border-emerald-500/20">
                💳
              </div>
              <h3 className="text-xl font-bold text-white flex items-center justify-between">
                Pagos & Financiero
                <span className="text-xs font-normal text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">Transparente</span>
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Registro transparente de transacciones, cuotas de inscripción por equipo, arbitrajes y estado de cuenta al día.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs font-medium text-emerald-400">
              Control de saldos e inscripciones ➔
            </div>
          </div>

          {/* Module 6: Fair Play */}
          <div className="card p-7 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 text-2xl mb-5 border border-teal-500/20">
                🤝
              </div>
              <h3 className="text-xl font-bold text-white flex items-center justify-between">
                Fair Play & Conducta
                <span className="text-xs font-normal text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded-full border border-teal-500/20">Deportividad</span>
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Seguimiento de la puntuación de Fair Play, control estricto de tarjetas amarillas y rojas, acumulados y suspensiones.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs font-medium text-teal-400">
              Promoción del juego limpio ➔
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 mb-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border border-emerald-500/30 p-8 sm:p-12 text-center glow-emerald">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-4xl mb-4 block">⚽🔥</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              ¿Listo para transformar el fútbol amateur de tu comunidad?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Regístrate ahora en Social Soccer y accede a tu perfil de jugador con credencial QR.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {user ? (
                <Link
                  to="/player-profile"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-emerald-500 px-8 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-400 hover:scale-105"
                >
                  Ir a mi perfil
                </Link>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-emerald-500 px-8 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-400 hover:scale-105"
                  >
                    Crear mi perfil gratis
                  </Link>
                  <Link
                    to="/login"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-8 py-3.5 text-base font-semibold text-slate-200 hover:bg-slate-800"
                  >
                    Iniciar sesión
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Sub-Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Social Soccer. Plataforma digital para el fútbol amateur.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Privacidad</span>
            <span>•</span>
            <span>Términos</span>
            <span>•</span>
            <span>Soporte</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
