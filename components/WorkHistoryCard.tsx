// components/WorkHistoryCard.tsx
type WorkHistoryCardProps = {
    role: string;
    company: string;
    period: string;
    description: string;
  };
  
  export default function WorkHistoryCard({ role, company, period, description }: WorkHistoryCardProps) {
    return (
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h3 className="text-xl font-semibold">{role}</h3>
        <p className="text-lg text-gray-700">{company}</p>
        <p className="text-sm text-gray-500 mb-2">{period}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }