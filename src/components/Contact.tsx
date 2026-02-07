import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="bg-gray-900 rounded-[3rem] p-10 md:p-20 text-center overflow-hidden relative">
          
          {/* Decor inside card */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500 rounded-full blur-2xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-white leading-tight">
              Готовы <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">масштабировать</span> продажи?
            </h2>
            <p className="text-xl text-gray-300 font-sans mb-12 leading-relaxed">
              Оставьте заявку на аудит или напишите мне напрямую в Telegram. Я лично разберу ваш проект и предложу стратегию роста.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://t.me/olya_direct" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-8 py-5 bg-white text-gray-900 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5 text-purple-600 group-hover:rotate-12 transition-transform" />
                Написать в Telegram
              </a>
              <button className="px-8 py-5 bg-transparent border-2 border-white/20 text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
                Заказать аудит <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <p className="mt-8 text-sm text-gray-500">
              * Отвечаю в течение 2-х часов в рабочее время
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
