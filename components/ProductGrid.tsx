'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Blazer de Linho Natural",
    price: "R$ 489,00",
    category: "Alfaiataria",
    image: "https://picsum.photos/seed/fashion1/800/1000"
  },
  {
    id: 2,
    name: "Vestido Midi Seda",
    price: "R$ 650,00",
    category: "Vestidos",
    image: "https://picsum.photos/seed/fashion2/800/1000"
  },
  {
    id: 3,
    name: "Camisa Oversized Algodão",
    price: "R$ 220,00",
    category: "Camisas",
    image: "https://picsum.photos/seed/fashion3/800/1000"
  },
  {
    id: 4,
    name: "Calça Pantalona",
    price: "R$ 340,00",
    category: "Calças",
    image: "https://picsum.photos/seed/fashion4/800/1000"
  },
  {
    id: 5,
    name: "Casaco de Lã",
    price: "R$ 890,00",
    category: "Casacos",
    image: "https://picsum.photos/seed/fashion5/800/1000"
  },
  {
    id: 6,
    name: "Top Cropped Estruturado",
    price: "R$ 180,00",
    category: "Tops",
    image: "https://picsum.photos/seed/fashion6/800/1000"
  },
  {
    id: 7,
    name: "Saia Plissada",
    price: "R$ 290,00",
    category: "Saias",
    image: "https://picsum.photos/seed/fashion7/800/1000"
  },
  {
    id: 8,
    name: "Macacão Utilitário",
    price: "R$ 560,00",
    category: "Macacões",
    image: "https://picsum.photos/seed/fashion8/800/1000"
  }
];

export default function ProductGrid() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto bg-white">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-2">Destaques da Semana</h2>
          <p className="text-stone-500">Peças selecionadas para o seu guarda-roupa.</p>
        </div>
        <button className="hidden md:block text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-stone-600 hover:border-stone-600 transition-all">
          Ver Tudo
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-12 text-center md:hidden">
        <button className="text-sm uppercase tracking-widest border-b border-black pb-1">
          Ver Tudo
        </button>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        
        <button className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-stone-100">
          <Plus className="h-5 w-5" />
        </button>
      </div>
      
      <div className="space-y-1">
        <p className="text-xs text-stone-500 uppercase tracking-wider">{product.category}</p>
        <h3 className="font-medium text-stone-900 text-lg group-hover:underline decoration-stone-300 underline-offset-4">{product.name}</h3>
        <p className="text-stone-600 font-serif italic">{product.price}</p>
      </div>
    </motion.div>
  );
}
