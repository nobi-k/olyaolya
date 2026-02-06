import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Глубокий Аудит",
    desc: "Я не начинаю работу с настройки. Сначала я разбираю ваш бизнес на атомы: анализирую конкурентов, Unit-экономику и текущие воронки. Если я вижу, что реклама не окупится — я скажу об этом сразу.",
    color: "bg-blue-50"
  },
  {
    num: "02",
    title: "Стратегия и Медиаплан",
    desc: "Вы получаете не просто 'запуск', а конкретный план: сколько лидов получим, по какой цене, и какой бюджет нужен для достижения цели. Никакой магии, только цифры.",
    color: "bg-purple-50"
  },
  {
    num: "03",
    title: "Гиперсегментация",
    desc: "Разделяю аудиторию на узкие сегменты. Директора бетонных заводов видят одно объявление, снабженцы — другое. Это повышает CTR и снижает стоимость заявки.",
    color: "bg-pink-50"
  },
  {
    num: "04",
    title: "Масштабирование",
    desc: "После получения первых результатов я не останавливаюсь. Отключаю нерабочие связки, перераспределяю бюджет в эффективные каналы и выжимаю максимум из рынка.",
    color: "bg-yellow-50"
  }
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-white py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-20 max-w-2xl">
           <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
             Как мы придем <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
               к результату?
             </span>
           </h2>
           <p className="text-xl text-gray-500 font-sans">
             Прозрачный процесс работы. Вы всегда знаете, что происходит и за что вы платите.
           </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-100 -translate-x-1/2 hidden md:block">
            <motion.div 
              style={{ scaleY: scrollYProgress }}
              className="absolute top-0 left-0 right-0 h-full bg-purple-600 origin-top"
            />
          </div>

          <div className="space-y-24 md:space-y-40 relative">
            {steps.map((step, i) => (
              <StepCard key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: typeof steps[0], index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col md:flex-row items-center gap-12 ${isEven ? "" : "md:flex-row-reverse"}`}
    >
      <div className="flex-1 w-full">
        <div className={`p-10 rounded-[2.5rem] border border-gray-100 shadow-xl ${step.color} relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500`}>
          <div className="absolute top-0 right-0 p-8 opacity-10 font-serif text-9xl font-bold select-none group-hover:scale-110 transition-transform duration-700">
            {step.num}
          </div>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              Этап {step.num}
            </span>
            <h3 className="text-3xl font-serif font-bold mb-4">{step.title}</h3>
            <p className="text-gray-600 font-sans leading-relaxed text-lg">
              {step.desc}
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 w-full flex justify-center hidden md:flex">
         <div className="w-4 h-4 rounded-full bg-white border-4 border-purple-600 z-10" />
      </div>
      
      <div className="flex-1 w-full hidden md:block" />
    </motion.div>
  );
}
