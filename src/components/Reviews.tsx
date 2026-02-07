import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Александр Волков",
    role: "Ген. директор 'БетонСтрой'",
    text: "Ольга полностью перестроила наш подход к рекламе. Мы перестали сливать бюджет на нецелевые клики и начали получать реальные заявки от застройщиков. ROI вырос в 3 раза за квартал.",
    initial: "АВ"
  },
  {
    name: "Елена Соколова",
    role: "Владелец сети салонов красоты",
    text: "Работаем с Ольгой уже 2 года. Ценю её честность: если канал не работает, она сразу говорит об этом. Очень системный подход, отчеты понятные даже мне, далекому от маркетинга человеку.",
    initial: "ЕС"
  },
  {
    name: "Дмитрий Нагиев",
    role: "Основатель 'МебельГрупп'",
    text: "Наконец-то нашли специалиста, который понимает специфику B2B. Ольга настроила не просто Директ, а целую воронку продаж. Теперь отдел продаж загружен на 100%.",
    initial: "ДН"
  }
];

export function Reviews() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              Что говорят <span className="text-purple-600 italic">клиенты</span>
            </h2>
            <p className="text-xl text-gray-500 font-sans">
              Реальные истории успеха и результаты совместной работы.
            </p>
          </div>
          <div className="hidden md:block">
            <Quote className="w-24 h-24 text-gray-100 rotate-180" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-3xl relative group hover:bg-purple-50 transition-colors duration-300"
            >
              <Quote className="w-10 h-10 text-purple-200 mb-6 group-hover:text-purple-300 transition-colors" />
              <p className="text-gray-600 font-sans leading-relaxed mb-8 text-lg italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-serif">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
