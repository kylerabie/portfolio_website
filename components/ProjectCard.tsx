// components/ProjectCard.tsx
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <Image src={image} alt={title} width={300} height={200} className="rounded mb-4 w-full h-auto" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}