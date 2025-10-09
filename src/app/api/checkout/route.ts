// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

// Instancia de Stripe segura para TypeScript y ESM
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});

export async function POST(req: Request) {
  try {
    // Obtenemos el priceId del body de la petición
    const { priceId } = await req.json();

    // URL de la app (usa localhost por defecto en desarrollo)
    const origin = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    // ✅ Creamos la sesión de Stripe Checkout en modo SUSCRIPCIÓN
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",  // 👈 cambiado de "payment" a "subscription"
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout?canceled=true`,
    });

    // Devolvemos la URL de checkout al cliente
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe Checkout error:", error);
    return NextResponse.json(
      { error: error.message || "Error creating Stripe session" },
      { status: 500 }
    );
  }
}
