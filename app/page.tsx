// 3. app/page.tsx
// Homepage, like a Java controller for "/"
import Image from "next/image";

export default function Home() {
  // Sample project data, like a Java List<Project>
  const projects = [
    {
      id: 1,
      title: "Crypto Sentiment Analysis",
      description: "Python/PySpark demo using static data",
      image: "/images/project1.jpg",
    },
    // Add more projects later
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="mb-6">
        Data engineer skilled in R, SQL, Python, and JavaScript. Relocating to Germany in 2025.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg p-4">
            {/* Placeholder image; add to public/images/ */}
            <Image src={project.image} alt={project.title} width={300} height={200} className="rounded" />
            <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}