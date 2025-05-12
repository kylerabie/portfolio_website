interface CertificationCardProps {
  date: string;
  title: string;
  description: string;
  technologies: string;
}

export default function CertificationCard({ date, title, description, technologies }: CertificationCardProps) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-10">
      <div className="col-span-1">
        <p className="text-sm text-white opacity-50">{date}</p>
      </div>
      <div className="col-span-3">
        <h3 className="font-heading text-md text-white flex items-center group">
          <span className="transition-all duration-300 group-hover:underline">{title}</span>
        </h3>
        <p className="text-sm text-white opacity-70 my-2">{description}</p>
        <p className="text-sm text-white opacity-50">{technologies}</p>
      </div>
    </div>
  );
} 