import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { SplineSceneBasic } from '@/components/SplineSceneBasic';
import { FloatingRobot } from '@/components/FloatingRobot';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <Navbar />
      <Hero />
      <ProductGrid />
      
      {/* 3D Interactive Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full">
        <SplineSceneBasic />
      </section>

      {/* Editorial Section */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Sobre a Marca</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
              Moda que conta uma história.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Acreditamos que o estilo é uma forma de expressão pessoal. Nossas coleções são criadas com atenção meticulosa aos detalhes, utilizando materiais sustentáveis e processos éticos.
            </p>
            <button className="text-stone-900 border-b border-stone-900 pb-1 uppercase tracking-widest text-sm hover:text-stone-600 hover:border-stone-600 transition-colors mt-4">
              Nossa História
            </button>
          </div>
          <div className="order-1 md:order-2 relative aspect-square md:aspect-[4/5] bg-stone-200 overflow-hidden">
             {/* Using a different seed for variety */}
             <img 
               src="https://picsum.photos/seed/editorial_fashion/800/1000" 
               alt="Editorial" 
               className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
             />
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Floating Robot Widget */}
      <FloatingRobot />
    </main>
  );
}
