"use client";
import React from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

export default function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [supabaseClient] = React.useState(() => createBrowserSupabaseClient());
  return <SessionContextProvider supabaseClient={supabaseClient}>{children}</SessionContextProvider>;
}
