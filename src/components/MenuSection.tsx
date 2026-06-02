import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, Flame, Beer, Coffee, Star, X } from 'lucide-react';
import { useState, useMemo } from 'react';
import { MENU_DATA, CATEGORIES, MenuItem } from '../data';

const WHATSAPP_NUMBER = '6282288770802';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredMenu = useMemo(() => {
    if (activeCategory === 'all') return MENU_DATA;
    return MENU_DATA.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const handleOrder = (item: MenuItem) => {
    const message = `Halo KerenYES! Saya mau pesan:%0A%0A- ${item.name}%0A- Harga: Rp ${item.price.toLocaleString('id-ID')}%0A%0AMohon diproses ya!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section id="menu" className="py-24 bg-[#030303] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            MENU <span className="text-[#FCE804]">KERENYES</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Pilih favoritmu dari menu krispi terbaik kami. Segar, nikmat, dan langsung dikirim!
          </motion.p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-none font-bold uppercase tracking-widest transition-all duration-300 border-2 ${
                  activeCategory === cat.id 
                    ? 'bg-[#FCE804] border-[#FCE804] text-[#030303] shadow-[4px_4px_0px_#FFFFFF]' 
                    : 'bg-transparent border-[#1A1A1A] text-gray-500 hover:border-[#FCE804] hover:text-[#FCE804]'
                }`}
              >
                <Icon size={18} />
                {cat.name}
              </motion.button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative bg-[#0D0D0D] border-2 border-[#1A1A1A] overflow-hidden shadow-[8px_8px_0px_#000000] hover:shadow-[8px_8px_0px_#FCE804] transition-all duration-300 transform-gpu"
              >
                {item.isBestSeller && (
                  <div className="absolute top-4 left-4 z-10 bg-[#FCE804] text-[#030303] px-3 py-1 text-xs font-black uppercase tracking-widest shadow-md">
                    Recommended
                  </div>
                )}
                
                <div className="aspect-[4/3] overflow-hidden border-b-2 border-[#1A1A1A]">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 transform-gpu"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black text-white uppercase mb-2 group-hover:text-[#FCE804] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2 h-10">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-3xl font-black text-white">
                      <span className="text-[#FCE804] text-sm mr-1">RP</span>
                      {item.price.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
