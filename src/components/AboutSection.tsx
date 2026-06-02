import { motion } from 'motion/react';
import { Sparkles, Trophy, ShieldCheck, Soup } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Bahan Terbaik & Halal",
      description: "Kami hanya menggunakan daging ayam segar pilihan dan bumbu berkualitas tinggi untuk menjamin cita rasa luar biasa."
    },
    {
      icon: Sparkles,
      title: "Pelayanan Terdepan",
      description: "Kepuasan Anda adalah prioritas kami. Hangat, cepat, ramah, dan higienis di setiap pesanan."
    },
    {
      icon: Soup,
      title: "Saus & Sambal Khas",
      description: "Kami terus berinovasi menyajikan berbagai varian saus kekinian serta racikan sambal nusantara yang menggugah selera."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0A0A] border-t-2 border-[#1A1A1A] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Intro Grid */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 border-[8px] border-[#FCE804] shadow-[15px_15px_0px_#000000] overflow-hidden aspect-[4/3] transform-gpu">
              <img 
                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80" 
                alt="Tentang KerenYES"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 transform-gpu"
              />
            </div>
            {/* Brutalist design shapes */}
            <div className="absolute -top-6 -left-6 bg-[#FCE804] text-[#030303] px-4 py-2 font-black uppercase tracking-wider text-sm z-20 shadow-[4px_4px_0px_#000000]">
              EST. 2020
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border-4 border-dashed border-gray-800 -z-10 animate-spin-slow"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2"
          >
            <span className="text-[#FCE804] text-xs font-black uppercase tracking-widest bg-[#1A1A1A] px-3 py-1 border border-[#333] mb-6 inline-block">
              ABOUT US • TENTANG KAMI
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
              PELAYANAN HEBAT <br/> & <span className="text-[#FCE804]">KUALITAS TERBAIK</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              KerenYES Friend Chicken merupakan perusahaan yang bergerak dibidang FnB, dengan mengedepankan pelayanan dan kualitas bahan baku yang terbaik untuk seluruh pelanggan setia kami.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Kami menyajikan kebahagiaan melalui sajian ayam goreng yang krispi di luar dan super juicy di dalam. Kebersihan dapur, keaslian rasa, dan kesegaran produk adalah janji mutlak yang terus kami jaga setiap hari.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards: Varian Produk Kerenyes */}
        <div className="border-t border-[#1A1A1A] pt-20">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
              VARIAN PRODUK <span className="text-[#FCE804]">KERENYES</span>
            </h3>
            <p className="text-gray-400">
              Kami memiliki berbagai macam menu baik varian saus, sambal khas nusantara, serta aneka pilihan hidangan cepat saji lezat lainnya yang siap memanjakan lidah Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#0D0D0D] border-2 border-[#1A1A1A] p-8 hover:border-[#FCE804] transition-all duration-300 shadow-[6px_6px_0px_#000000] hover:shadow-[6px_6px_0px_#FCE804] hover:-translate-y-1"
                >
                  <div className="bg-[#1A1A1A] w-14 h-14 flex items-center justify-center text-[#FCE804] mb-6 border border-[#333] shadow-[4px_4px_0px_#000000]">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-xl font-black text-white uppercase mb-3 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
