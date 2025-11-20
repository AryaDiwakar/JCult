interface StatItem {
  number: string;
  description: string;
}

interface StatsProps {
  stats: StatItem[];
  title?: string;
  className?: string;
}

export default function Stats({ stats, title, className = "" }: StatsProps) {
  return (
    <section className={`py-6 md:py-8 lg:py-16 mb-6 md:mb-8 ${className}`}>
      <div className="container-responsive">
        {title && (
          <div className="flex flex-col md:flex-row mb-6 md:mb-8 lg:mb-16">
            <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary">{title}</h2>
            </div>
          </div>
        )}
        <div className="md:ml-32 lg:ml-48 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item border-l-2 border-secondary pl-3 md:pl-4 lg:pl-6">
              <div className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary mb-3 md:mb-4 lg:mb-8">
                {stat.number}
              </div>
              <p className="text-secondary text-xs md:text-sm lg:text-base">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}