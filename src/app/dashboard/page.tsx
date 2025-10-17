"use client";
import React from "react";

export default function DashboardPage() {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/admin/users");
      const json = await res.json();
      setUsers(json.users || []);
    };
    load();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <p>Vista principal de usuario — estadísticas, resumen, etc.</p>

      <h2 className="text-xl mt-6 mb-2">Usuarios:</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.email} — {new Date(u.created_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
