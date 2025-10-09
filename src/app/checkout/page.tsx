"use client";

import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function CheckoutPage() {
  const [loading, setLoading] = React.useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: "price_1SEy7fGwNSlQ9gTUzTPozjEz", // tu price ID real
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // redirige a Stripe
      } else {
        alert(data.error || "Error al crear la sesión de pago");
        setLoading(false);
      }
    } catch (err) {
      console.error("Error en el frontend:", err);
      alert("Hubo un error al iniciar el pago");
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Checkout de Suscripción</h1>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="btn px-4 py-2 bg-blue-600 text-white rounded"
      >
        {loading ? "Cargando..." : "Suscribirme"}
      </button>
    </div>
  );
}
