import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

interface MinimalPageProps {
  title: string;
}

export default function MinimalPage({ title }: MinimalPageProps) {
  return (
    <div className="min-h-screen bg-main">
      <Header />
      <main className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl md:text-6xl font-bold text-primary text-center">
          {title}
        </h1>
      </main>
      <Footer />
    </div>
  );
}