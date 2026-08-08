import { Outlet } from "react-router";
import "./App.css";
import { Header } from "./shared/components/Header";

export function App() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 py-8">
        <Outlet />
      </main>
    </>
  );
}
