import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Instagram, Facebook, Phone, MapPin, Clock, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import MenuSection from './components/MenuSection';
import PartnershipSection from './components/PartnershipSection';
import AboutSection from './components/AboutSection';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Partnership', href: '#partnership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-[#FCE804] selection:text-[#030303]">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-[#030303]/90 backdrop-blur-md py-4 border-b border-[#FCE804]/20' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-3xl font-black tracking-tighter flex items-center gap-2">
            <span className="bg-[#FCE804] text-[#030303] px-2 py-0.5">KEREN</span>
            <span>YES</span>
          </a>

          <div className="hidden lg:flex gap-8 lg:gap-10 animate-fade-in">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-black uppercase tracking-widest hover:text-[#FCE804] transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <a 
            href={`https://wa.me/6282288770802?text=Halo KerenYES! Saya mau pesan.`} 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-[#FCE804] text-[#030303] px-6 py-2.5 font-black uppercase text-sm shadow-[4px_4px_0px_#FFFFFF] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            ORDER NOW <Phone size={16} />
          </a>

          <button className="lg:hidden text-[#FCE804] focus:outline-none" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[200] bg-[#030303] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-3xl font-black tracking-tighter">
                <span className="bg-[#FCE804] text-[#030303] px-2">KEREN</span>YES
              </span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-[#FCE804]"><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-5xl font-black uppercase tracking-tighter hover:text-[#FCE804]">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto">
               <a 
                href={`https://wa.me/6282288770802`}
                className="w-full flex items-center justify-center gap-3 bg-[#FCE804] text-[#030303] py-6 font-black text-xl uppercase"
               >
                 WhatsApp Us <Phone size={24} />
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl md:text-[13rem] font-black leading-[0.8] uppercase tracking-tighter mb-8">
                CRISPY <br /> 
                <span className="text-[#FCE804] stroke-white outline-text">NAGIH★</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-xl mb-12 border-l-4 border-[#FCE804] pl-6">
                Ayam goreng krispi dengan bumbu rahasia KerenYES yang bikin setiap gigitan berkesan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="#menu"
                  className="flex items-center justify-center gap-2 bg-[#FCE804] text-[#030303] px-10 py-5 font-black uppercase text-lg shadow-[8px_8px_0px_#FFFFFF] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all"
                >
                  LIHAT MENU <ArrowRight size={20} />
                </a>
                <a 
                   href="#partnership"
                   className="flex items-center justify-center gap-2 border-4 border-white text-white px-10 py-5 font-black uppercase text-lg hover:bg-white hover:text-[#030303] transition-all"
                >
                  KEMITRAAN
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase font-black tracking-widest text-[#FCE804]">Scroll</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-[#FCE804] to-transparent"></div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0A0A0A] border-y-2 border-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Cabang', value: '15+' },
              { label: 'Menu Hemat', value: '25+' },
              { label: 'Happy Customers', value: '50K+' },
              { label: 'Rating', value: '4.9/5' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-6xl font-black text-[#FCE804] mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm uppercase font-black tracking-widest text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <MenuSection />
      <PartnershipSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#030303] border-t-2 border-[#1A1A1A]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#FCE804] text-xs font-black uppercase tracking-widest bg-[#1A1A1A] px-3 py-1 border border-[#333] mb-6 inline-block">
              ORDER & HUBUNGI PUSAT
            </span>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-16 uppercase tracking-tighter">
              HUBUNGI <span className="text-[#FCE804]">KAMI</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 text-left">
            <div className="bg-[#0D0D0D] border-2 border-[#1A1A1A] p-8 shadow-[6px_6px_0px_#000000] hover:border-[#FCE804] hover:shadow-[6px_6px_0px_#FCE804] transition-all">
              <div className="bg-[#1A1A1A] w-12 h-12 flex items-center justify-center text-[#FCE804] border border-[#333] mb-6">
                <Phone size={20} />
              </div>
              <h4 className="text-xs uppercase font-black text-gray-500 tracking-widest mb-1">WhatsApp</h4>
              <p className="text-2xl font-black text-white">0822-8877-0802</p>
            </div>

            <div className="bg-[#0D0D0D] border-2 border-[#1A1A1A] p-8 shadow-[6px_6px_0px_#000000] hover:border-[#FCE804] hover:shadow-[6px_6px_0px_#FCE804] transition-all">
              <div className="bg-[#1A1A1A] w-12 h-12 flex items-center justify-center text-[#FCE804] border border-[#333] mb-6">
                <MapPin size={20} />
              </div>
              <h4 className="text-xs uppercase font-black text-gray-500 tracking-widest mb-1">Lokasi</h4>
              <p className="text-2xl font-black text-white">Pusat Kota, Indonesia</p>
            </div>

            <div className="bg-[#0D0D0D] border-2 border-[#1A1A1A] p-8 shadow-[6px_6px_0px_#000000] hover:border-[#FCE804] hover:shadow-[6px_6px_0px_#FCE804] transition-all">
              <div className="bg-[#1A1A1A] w-12 h-12 flex items-center justify-center text-[#FCE804] border border-[#333] mb-6">
                <Clock size={20} />
              </div>
              <h4 className="text-xs uppercase font-black text-gray-500 tracking-widest mb-1">Jam Buka</h4>
              <p className="text-2xl font-black text-white">10:00 - 22:00 WIB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030303] border-t-2 border-[#1A1A1A] pt-16 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-16 text-left">
            <div>
              <a href="#" className="text-3xl font-black tracking-tighter flex items-center gap-2 mb-4">
                <span className="bg-[#FCE804] text-[#030303] px-2 py-0.5">KEREN</span>
                <span className="text-white">YES ★</span>
              </a>
              <p className="text-gray-500 text-sm italic mb-4">"Crispy. Juicy. Nagih."</p>
              <p className="text-xs text-gray-600 uppercase font-black tracking-widest">Since 2020</p>
            </div>
            
            <div>
              <h5 className="text-[#FCE804] text-xs font-black uppercase tracking-widest mb-6">Navigasi</h5>
              <ul className="space-y-3">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-[#FCE804] text-xs font-black uppercase tracking-widest mb-6">Media Sosial</h5>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#0D0D0D] border border-[#1A1A1A] hover:border-[#FCE804] hover:text-[#030303] hover:bg-[#FCE804] transition-all text-[#FCE804]">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#0D0D0D] border border-[#1A1A1A] hover:border-[#FCE804] hover:text-[#030303] hover:bg-[#FCE804] transition-all text-[#FCE804]">
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://wa.me/6282288770802" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-4 bg-[#0D0D0D] border border-[#1A1A1A] hover:border-[#FCE804] hover:text-[#030303] hover:bg-[#FCE804] transition-all text-[#FCE804] font-black text-sm uppercase tracking-wider flex items-center gap-2"
                >
                  WhatsApp <Phone size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1A1A1A] pt-8 text-center md:flex md:justify-between md:items-center">
            <p className="text-xs font-black text-gray-600 uppercase tracking-widest mb-4 md:mb-0">
              © 2026 KERENYES FRIEND CHICKEN • ALL RIGHTS RESERVED
            </p>
            <p className="text-xs font-black text-gray-700 uppercase tracking-widest">
              LEVEL UP YOUR HUNGER
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

