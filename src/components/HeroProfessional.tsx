import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import olya2 from "@/assets/images/olya-2.jpg";
import { Noise, AnimatedText } from "./ui/ModernUI";

export function HeroProfessional() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F9FAFB]">
      <Noise />
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-100 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2" />

      <div className="container px-4 md:px-6 mx-auto relative z-10 grid md:grid-cols-2 gap-12 md:gap-20 3xl:gap-32 items-center pt-20 md:pt-0">
        
        {/* Text Content */}
        <motion.div 
          style={{ y: y1 }}
          className="space-y-10 order-2 md:order-1"
        >
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-purple-100 rounded-full shadow-sm text-purple-700 text-sm font-medium"
           >
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
             Маркетинг с человеческим лицом
           </motion.div>

           <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-serif font-medium leading-[1.05] tracking-tight text-gray-900">
              Ольга <br/>
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Николаевна
              </span>
            </h1>
            
            <AnimatedText 
              text="Превращаю бетонные заводы в бетонные продажи. Системный подход к контекстной рекламе." 
              className="text-xl md:text-2xl text-gray-500 font-sans leading-relaxed max-w-lg"
            />
           </div>

           <div className="flex flex-col sm:flex-row gap-6 pt-4">
             <motion.button 
               onClick={scrollToAbout}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors shadow-xl shadow-gray-200"
             >
               Обсудить проект 
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </motion.button>
             
             <div className="flex gap-8 items-center px-4">
                <div>
                  <p className="text-3xl font-serif font-bold text-gray-900">₽500M+</p>
                  <p className="text-sm text-gray-500 font-sans uppercase tracking-wider">Бюджета</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div>
                  <p className="text-3xl font-serif font-bold text-gray-900">150+</p>
                  <p className="text-sm text-gray-500 font-sans uppercase tracking-wider">Проектов</p>
                </div>
             </div>
           </div>
        </motion.div>

        {/* Visual */}
        <motion.div 
          style={{ y: y2 }} 
          className="relative order-1 md:order-2 flex justify-center"
        >
           <div className="relative w-[320px] h-[420px] md:w-[450px] md:h-[580px] 3xl:w-[550px] 3xl:h-[700px] 4xl:w-[650px] 4xl:h-[830px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-[3rem] rotate-6 scale-95 opacity-60 blur-sm" />
              <motion.div 
                className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-white"
                whileHover={{ rotate: 0, scale: 1.02 }}
                initial={{ rotate: -3 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={olya2} 
                  alt="Ольга Николаевна" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]"
              >
                <p className="text-4xl mb-2">🚀</p>
                <p className="font-serif font-bold text-lg leading-tight">Топ-1 Директолог</p>
                <p className="text-xs text-gray-400 mt-1">В нише производства</p>
              </motion.div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
