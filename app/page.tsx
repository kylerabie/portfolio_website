import { Header, About, WorkExperienceCard, CertificationCard } from './components';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-[500px] mx-auto px-4 pt-[115px] pb-[115px]">
        <Header />
        <About />

        {/* Work Experience Section */}
        <div className="mb-14">
          <h2 className="font-heading text-md mb-10 text-white">Work Experience</h2>
          <WorkExperienceCard
            date="2025 - Present"
            title="Data Engineer, DataOrbis"
            description="Currently working as a Data Engineer, focusing on building and maintaining data infrastructure and pipelines."
            technologies="Azure Data Factory • SSIS • Apache Spark • REST APIs"
          />
          <WorkExperienceCard
            date="2024 - 2025"
            title="Junior Data Engineer, DataOrbis"
            description="Designed and implemented ETL processes using SQL, SSIS, and Azure Data Factory. Built data models for analytics and optimized database performance. Developed RESTful APIs and implemented data governance policies."
            technologies="SSIS • Azure Data Factory • SQL Server • REST APIs"
          />
          <WorkExperienceCard
            date="2023 - 2024"
            title="Senior Project Analyst, DataOrbis"
            description="Led analyst team and implemented Agile methodologies. Established data governance policies and created automated checks in R. Built optimized data pipelines and developed complex SQL queries for analysis."
            technologies="R • SQL Server • Jira • Agile • Team Leadership"
          />
          <WorkExperienceCard
            date="2020 - 2023"
            title="Project Analyst, DataOrbis"
            description="Pioneered data quality checks and validation processes. Mentored teams in R programming and adapted to changing project requirements through continuous feedback."
            technologies="R • SQL • Jira • Scrum • Data Analysis"
          />
          <WorkExperienceCard
            date="2019 - 2020"
            title="Operations Analyst, DataOrbis"
            description="Monitored data pipelines and implemented automated processes. Collaborated with cross-functional teams and resolved data-related incidents."
            technologies="Data Analysis • SQL Server • Data Warehousing"
          />
        </div>

        {/* Certifications Section */}
        <div className="mb-14">
          <h2 className="font-heading text-md mb-6 text-white">Licenses & Certifications</h2>
          <CertificationCard
            date="Sep 2024 - Sep 2025"
            title="Academy Accreditation - Databricks Fundamentals"
            description="Databricks"
            technologies="Credential ID: 116924577"
          />
          <CertificationCard
            date="Sep 2024"
            title="Microsoft Certified: Azure Administrator Associate"
            description="Microsoft"
            technologies="Credential ID: 939E8B9DC7B37837"
          />
          <CertificationCard
            date="Oct 2023"
            title="Microsoft Certified: Azure Data Engineer Associate"
            description="Microsoft"
            technologies="Credential ID: 62084AF73DD28CE9"
          />
          <CertificationCard
            date="Jan 2021"
            title="Querying Data with Transact-SQL"
            description="Microsoft"
            technologies=""
          />
        </div>

        {/* Side Projects Section */}
        <div className="mb-14">
          <h2 className="font-heading text-md mb-10 text-white">Side Projects</h2>
          <WorkExperienceCard
            date="2024"
            title="Personal Portfolio Website"
            description="Designed and developed a personal website to showcase projects and experience. Built using React.js and TailwindCSS."
            technologies="React • TailwindCSS • Vercel"
          />
          <WorkExperienceCard
            date="2023"
            title="ETL Automation Tool"
            description="Built a Python-based ETL tool for automated data ingestion, transformation, and storage on cloud data warehouses."
            technologies="Python • Airflow • AWS S3 • Redshift"
          />
        </div>
      </div>
    </div>
  );
}
