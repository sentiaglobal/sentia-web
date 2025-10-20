// src/components/CourseCard.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CourseCard({ title, desc }: { title: string; desc: string }) {
  return (
    <Card className="mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mb-4">{desc}</p>
      <Button>Inscribirse ahora</Button>
    </Card>
  );
}
