// app/page.tsx
import WorkHistoryCard from "@/components/WorkHistoryCard";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const workHistory = [
    {
      id: 1,
      role: "Data Engineer",
      company: "Example Corp",
      period: "2022–2024",
      description: "Built data pipelines with Python, SQL, and PySpark for ETL processes.",
    },
    {
      id: 2,
      role: "Data Analyst",
      company: "Tech Solutions",
      period: "2020–2022",
      description: "Developed R visualizations and SQL queries for business insights.",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Crypto Sentiment Analysis",
      description: "Python/PySpark demo analyzing market trends with static data.",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "SQL Dashboard",
      description: "PostgreSQL app for real-time data visualization.",
      image: "/images/project2.jpg",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4">Your Name</h1>
        <p className="text-xl text-gray-600 mb-6">
          Data engineer skilled in R, SQL, Python, and JavaScript. Relocating to Germany in 2025.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Work History</h2>
        <div className="space-y-6">
          {workHistory.map((work) => (
            <WorkHistoryCard
              key={work.id}
              role={work.role}
              company={work.company}
              period={work.period}
              description={work.description}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Current Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}