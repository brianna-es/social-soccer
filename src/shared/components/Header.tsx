import { logout, useAuth } from "wasp/client/auth";
import { Link } from "wasp/client/router";

export function Header() {
  const { data: user } = useAuth();

  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3.5">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-xl font-black tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20 text-lg">
            ⚽
          </span>
          <span className="bg-gradient-to-r from-white via-slate-100 to-emerald-400 bg-clip-text text-transparent">
            Social Soccer
          </span>
        </Link>

        <nav>
          <ul className="flex items-center gap-3 text-sm font-semibold">
            {user ? (
              <>
                <li>
                  <Link
                    to="/player-profile"
                    className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-400 transition-all hover:bg-emerald-500/20 hover:border-emerald-500/50"
                  >
                    <span>👤</span> Mi Perfil
                  </Link>
                </li>

                <li>
                  <button
                    onClick={handleLogout}
                    className="rounded-xl border border-slate-700/80 bg-slate-800/50 px-4 py-2 text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="rounded-xl px-4 py-2 text-slate-300 transition-all hover:bg-slate-800/80 hover:text-white"
                  >
                    Iniciar sesión
                  </Link>
                </li>

                <li>
                  <Link
                    to="/signup"
                    className="rounded-xl bg-emerald-500 px-4.5 py-2 font-bold text-slate-950 shadow-md shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95"
                  >
                    Registrarse
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

