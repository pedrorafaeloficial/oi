'use client';

import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl text-white tracking-tighter">LUMINA.</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Redefinindo a moda contemporânea com peças atemporais e sustentáveis. Feito para quem valoriza a essência.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
          </div>
        </div>

        {/* Links 1 */}
        <div>
          <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-6">Comprar</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="#" className="hover:text-white transition-colors">Novidades</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Feminino</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Masculino</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Acessórios</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Sale</Link></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-6">Ajuda</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="#" className="hover:text-white transition-colors">Envio e Entrega</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Trocas e Devoluções</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Guia de Tamanhos</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Fale Conosco</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-6">Newsletter</h4>
          <p className="text-sm mb-4">Receba novidades e ofertas exclusivas.</p>
          <form className="flex flex-col space-y-3">
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              className="bg-stone-800 border border-stone-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-stone-500 transition-colors"
            />
            <button className="bg-white text-black px-4 py-3 text-sm uppercase tracking-widest font-bold hover:bg-stone-200 transition-colors">
              Inscrever-se
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; 2026 Lumina Moda. Todos os direitos reservados.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white">Privacidade</Link>
          <Link href="#" className="hover:text-white">Termos</Link>
        </div>
      </div>
    </footer>
  );
}
