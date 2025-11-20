interface TwoSidedGridProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonAction?: () => void;
  imageOnLeft?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

export default function TwoSidedGrid({ 
  imageSrc, 
  imageAlt, 
  title, 
  description, 
  buttonText, 
  buttonAction,
  imageOnLeft = true,
  backgroundColor = "bg-tertiary",
  textColor = "text-primary"
}: TwoSidedGridProps) {
  return (
    <section className={`flex flex-col md:flex-row items-center min-h-[60vh] px-4 md:px-8 py-8 md:py-16 ${backgroundColor}`}>
      <div className={`flex-1 mb-8 md:mb-0 ${!imageOnLeft ? 'md:order-2 md:pl-16' : ''}`}>
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className={`flex-1 ${imageOnLeft ? 'md:pl-16' : 'md:pr-16'}`}>
        <h2 className={`text-2xl md:text-4xl font-bold ${textColor} mb-4 md:mb-6`}>
          {title}
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
          {description}
        </p>
        <button 
          className="btn-primary px-6 md:px-8 py-3"
          onClick={buttonAction}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}