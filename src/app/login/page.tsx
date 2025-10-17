import React from "react";

export default function LoginPage() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Login</h1>
        <form className="flex flex-col gap-4 w-full max-w-sm">
          <input
            className="border rounded px-4 py-2"
            type="email"
            placeholder="Email"
          />
          <input
            className="border rounded px-4 py-2"
            type="password"
            placeholder="Password"
          />
          <button
            className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </main>
    </div>
  );
}
