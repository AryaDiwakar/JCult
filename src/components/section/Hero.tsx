interface HeroProps {
  videoSrc?: string;
  imageSrc?: string;
  title: string;
  description: string;
}

export default function Hero({ videoSrc, imageSrc, title, description }: HeroProps) {
  return (
    <section className="relative hero-responsive hero-expanded overflow-hidden mb-6 md:mb-8">
      {videoSrc ? (
        <video 
          className="absolute top-0 left-0 right-0 h-full w-full object-cover"
          autoPlay 
          muted 
          loop
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <img 
          src={imageSrc}
          alt="Hero background"
          className="absolute top-0 left-0 right-0 h-full w-full object-cover"
        />
      )}
      
      <div className="absolute top-3 md:top-6 lg:top-8 hero-content-align z-10 py-2 md:py-3 lg:py-4">
        <h1 className="text-xl md:text-3xl lg:text-6xl font-bold text-white max-w-[250px] md:max-w-[350px] lg:max-w-[400px]">
          {title}
        </h1>
      </div>
      
      <div className="absolute bottom-0 hero-content-align right-3 md:right-8 lg:right-16 z-10">
        <div className="bg-primary bg-opacity-20 backdrop-blur-md px-3 md:px-8 lg:px-16 py-3 md:py-6 lg:py-8 border border-primary border-opacity-30">
          <p className="text-white text-xs md:text-base lg:text-lg leading-relaxed max-w-[300px] md:max-w-[450px] lg:max-w-[500px]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}