'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-stone-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/fashion_hero_v2/1920/1080"
          alt="Coleção de Verão"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-stone-200"
        >
          Nova Coleção 2026
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-tight"
        >
          Essência Minimalista
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-stone-300 max-w-lg text-lg mb-10 font-light"
        >
          Descubra peças desenhadas para durar. Elegância, conforto e sofisticação em cada detalhe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="bg-white text-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-stone-200 transition-colors font-semibold">
            Explorar Coleção
          </button>
        </motion.div>
      </div>
    </section>
  );
}
