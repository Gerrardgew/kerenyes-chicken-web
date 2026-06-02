import { motion } from 'motion/react';
import { Briefcase, TrendingUp, ShieldCheck, HeartHandshake, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '6282288770802';

export default function PartnershipSection() {
  const steps = [
    {
      number: "1",
      title: "Hubungi Kemitraan",
      description: "Hubungi tim kemitraan kami langsung melalui tombol WhatsApp yang telah disediakan untuk berkonsultasi."
    },
    {
      number: "2",
      title: "Share Lokasi dan Cek Lokasi",
      description: "Kirimkan koordinat lokasi outlet potensial Anda untuk kami evaluasi prospek pasar dan kelayakannya."
    },
    {
      number: "3",
      title: "Survey dan Akad",
      description: "Tim surveyor profesional kami akan meninjau lokasi secara langsung, dilanjutkan dengan proses kesepakatan akad legal."
    },
    {
      number: "4",
      title: "Training dan Jualan",
      description: "Pelatihan standar pelayanan & SOP operasional dapur, hingga outlet KerenYES siap dibuka untuk umum."
    }
  ];

  const handlePartnershipInquiry = () => {
    window.open('https://kerenyes.com/wp-content/uploads/2026/01/KATALOG-KERENYES-JABODETABEK-2026.pdf', '_blank');
  };

  return (
    <section id="partnership" className="py-24 bg-[#FCE804] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-5xl md:text-7xl font-black text-[#030303] mb-8 uppercase leading-tight tracking-tighter">
              GABUNG <br /> <span className="bg-[#030303] text-[#FCE804] px-2 shadow-[8px_8px_0px_#FFFFFF]">KEMITRAAN</span> <br /> KERENYES!
            </h2>
            <p className="text-[#030303] text-lg mb-12 font-medium max-w-lg">
              Kembangkan bisnismu bersama brand ayam krispi yang paling dicintai. Ikuti 4 langkah mudah untuk memulai kemitraan Anda:
            </p>

            <div className="space-y-8">
              {steps.map((step, idx) => {
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="bg-[#030303] w-14 h-14 flex items-center justify-center rounded-none shadow-[4px_4px_0px_#FFFFFF] shrink-0 font-black text-[#FCE804] text-2xl">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-[#030303] uppercase mb-1">{step.title}</h4>
                      <p className="text-[#030303]/70 font-medium">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePartnershipInquiry}
              className="mt-16 flex items-center gap-3 bg-[#030303] text-[#FFFFFF] px-10 py-5 font-black uppercase tracking-widest shadow-[8px_8px_0px_#FFFFFF] hover:bg-[#1A1A1A] transition-all"
            >
              Info Kemitraan <Briefcase size={20} />
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 border-[10px] border-[#030303] shadow-[20px_20px_0px_#FFFFFF] overflow-hidden aspect-square transform-gpu">
              <img 
                src="https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80" 
                alt="Fried Chicken KerenYES"
                className="w-full h-full object-cover transform-gpu"
              />
            </div>
            {/* Decors */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#030303] z-0 opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-4 border-[#030303] z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
