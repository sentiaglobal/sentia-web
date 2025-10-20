// src/app/page.tsx
import { Input } from "@/components/ui/input";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto">
      <header className="text-center">
        <h1 className="text-3xl font-bold mb-2">Bienvenido a Sentía</h1>
        <p className="text-gray-700">Descubre cursos, podcasts y mucho más.</p>
        <Input placeholder="Busca cursos o contenido..." className="mt-4" />
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Cursos destacados</h2>
        <CourseCard title="Curso de IA para creativos" desc="Aprende a usar herramientas de IA para crear proyectos únicos." />
        <CourseCard title="Redacción creativa" desc="Mejora tu escritura y creatividad." />
      </section>

      <footer className="mt-12 text-center text-gray-500">
        © 2025 Sentía Global. Todos los derechos reservados.
      </footer>
    </div>
  );
}
