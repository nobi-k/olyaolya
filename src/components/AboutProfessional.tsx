import { Award, TrendingUp, Search, CheckCircle } from "lucide-react";
import olya1 from "@/assets/images/olya-1.jpg";
import { motion } from "framer-motion";
import { Ticker } from "./ui/ModernUI";

export function AboutProfessional() {
  const skills = [
    { 
      icon: <Award className="w-8 h-8 text-red-500" />, 
      title: "2 Красных Диплома", 
      desc: "Фундаментальный подход к аналитике и стратегии.",
      colSpan: "md:col-span-1" 
    },
    { 
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />, 
      title: "ROI-Marketing", 
      desc: "Не просто настраиваю рекламу, а строю систему привлечения прибыли.",
      colSpan: "md:col-span-2" 
    },
    { 
      icon: <Search className="w-8 h-8 text-green-500" />, 
      title: "Эксперт Авито", 
      desc: "Знаю алгоритмы площадки лучше, чем техподдержка.",
      colSpan: "md:col-span-1" 
    },
    { 
      icon: <CheckCircle className="w-8 h-8 text-yellow-500" />, 
      title: "Результат", 
      desc: "Работаю до выполнения KPI, прописанных в договоре.",
      colSpan: "md:col-span-2" 
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      
      <div className="mb-20">
        <Ticker items={["БЕТОННЫЕ ЗАВОДЫ", "НЕДВИЖИМОСТЬ", "ПРОИЗВОДСТВО", "B2B УСЛУГИ", "СТРОИТЕЛЬСТВО"]} />
      </div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                Почему выбирают <br/>
                <span className="text-purple-600 italic">именно меня?</span>
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed font-sans">
                В мире, где каждый второй — "маркетолог", я предлагаю не обещания, а математически выверенные стратегии.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-50 transition-all duration-300 ${skill.colSpan}`}
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                    {skill.icon}
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-3 text-gray-900">{skill.title}</h3>
                  <p className="text-gray-500 font-sans leading-relaxed">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-md aspect-[3/4]">
              <div className="absolute inset-0 bg-gray-900 rounded-[2rem] transform rotate-3 translate-x-4 translate-y-4"></div>
              <motion.img 
                src={olya1} 
                alt="Ольга Профиль" 
                className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
