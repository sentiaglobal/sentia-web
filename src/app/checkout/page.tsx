"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function CheckoutPage() {
  const [loading, setLoading] = React.useState(false);

  const onBuy = async () => {
    setLoading(true);

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId: "price_1SEy7fGwNSlQ9gTUzTPozjEz" }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert(data.error || "Error al crear sesión de pago");
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Checkout</h1>
      <button onClick={onBuy} disabled={loading} className="btn">
        {loading ? "Cargando..." : "Pagar"}
      </button>
    </div>
  );
}

