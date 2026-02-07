import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Какой минимальный бюджет нужен для старта?",
    answer: "Я работаю с рекламными бюджетами от 50 000 рублей в месяц. Если бюджет меньше, эффективность моей работы будет низкой, так как большая часть средств уйдет на оплату услуг, а не на трафик."
  },
  {
    question: "Вы даете гарантии лидов/продаж?",
    answer: "Я гарантирую качественную настройку, целевой трафик и прозрачную отчетность. Гарантировать продажи не может ни один честный маркетолог, так как это зависит также от вашего отдела продаж, цены, продукта и спроса."
  },
  {
    question: "Работаете ли вы с моей нишей?",
    answer: "Я специализируюсь на B2B, производстве, строительстве и недвижимости. Если у вас инфобизнес, товарка (маркетплейсы) или сетевой маркетинг — я, скорее всего, не смогу быть полезна."
  },
  {
    question: "Что входит в ежемесячное ведение?",
    answer: "Еженедельная оптимизация ставок, чистка площадок (минус-слова), А/Б тестирование объявлений, корректировка стратегии и подробный отчет с рекомендациями в конце месяца."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
            Частые <span className="text-purple-600 italic">вопросы</span>
          </h2>
          <p className="text-xl text-gray-500 font-sans">
            Всё, что вы хотели узнать, но стеснялись спросить.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-xl font-serif font-bold text-gray-900 pr-8">{faq.question}</span>
                <span className={`p-2 rounded-full ${activeIndex === index ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-500'}`}>
                  {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-600 font-sans leading-relaxed border-t border-gray-100 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
