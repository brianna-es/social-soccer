import { logout, useAuth } from "wasp/client/auth";
import { Button, ButtonLink } from "./Button";

export function Header() {
  const { data: user } = useAuth();

  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="text-xl font-bold text-neutral-900"
        >
          Social Soccer
        </a>

        <nav>
          <ul className="flex items-center gap-4 font-semibold">
            {user ? (
              <>
                <li>
                  <ButtonLink to="/player-profile">
                    Mi perfil
                  </ButtonLink>
                </li>

                <li>
                  <Button onClick={handleLogout}>
                    Cerrar sesión
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <ButtonLink to="/signup">
                    Registrarse
                  </ButtonLink>
                </li>

                <li>
                  <ButtonLink to="/login" variant="ghost">
                    Iniciar sesión
                  </ButtonLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
