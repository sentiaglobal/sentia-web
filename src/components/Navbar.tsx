"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";  // 👈 ajusta la ruta si es necesario

export default function Navbar() {
  const router = useRouter();

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <nav className="p-4 flex justify-between bg-white shadow">
      <Link href="/" className="font-bold">Sentía</Link>
      <div className="flex gap-4 items-center">
        <Link href="/products">Productos</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/profile">Perfil</Link>
        <button onClick={logout} className="ml-4">
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}
