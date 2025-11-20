import Image from "next/image";

export default function CoreValuesSection() {
  const valuesTop = [
    {
      title: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const valuesBottom = [
    {
      title: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="bg-primary text-white py-20 relative overflow-visible">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left image */}
        <div className="relative w-full h-[320px] md:h-[360px] -mt-32">
          <Image
            src="/images/office.webp"
            alt="Team walking"
            fill
            className="object-cover"
          />
        </div>

        {/* Right heading */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Guided by
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-green-300 mt-2">
            Our Core Values
          </h3>
        </div>
      </div>

      {/* VALUES GRID */}
      <div className="max-w-7xl mx-auto px-6 mt-20">

        {/* Top row: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-10">
          {valuesTop.map((value, i) => (
            <div 
              key={i} 
              className="relative pr-6"
            >
              {/* Vertical Divider */}
              {i !== 2 && (
                <div className="absolute top-0 right-0 h-full w-px bg-white/30"></div>
              )}
              <h4 className="font-serif text-2xl mb-4">{value.title}</h4>
              <p className="text-sm leading-relaxed text-white/90">{value.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom row: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 border-t border-white/20 pt-10">
          {valuesBottom.map((value, i) => (
            <div 
              key={i}
              className="relative pr-6"
            >
              {/* Vertical Divider */}
              {i === 0 && (
                <div className="absolute top-0 right-0 h-full w-px bg-white/30"></div>
              )}
              <h4 className="font-serif text-2xl mb-4">{value.title}</h4>
              <p className="text-sm leading-relaxed text-white/90">{value.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}