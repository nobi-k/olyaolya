import { motion } from "framer-motion";
import { BarChart3, Target, MousePointerClick, Search } from "lucide-react";

const services = [
  {
    icon: <Target className="w-10 h-10 text-purple-600" />,
    title: "Контекстная Реклама",
    desc: "Яндекс.Директ под ключ. От семантического ядра до первых лидов. Работаю не на клики, а на KPI.",
    price: "от 50 000 ₽"
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-pink-600" />,
    title: "Сквозная Аналитика",
    desc: "Настройка Метрики, коллтрекинга и CRM. Вы будете видеть стоимость каждого клиента, а не просто цену клика.",
    price: "от 30 000 ₽"
  },
  {
    icon: <Search className="w-10 h-10 text-blue-600" />,
    title: "Авито Продвижение",
    desc: "Масштабирование продаж через Авито. Стратегии, которые выводят объявления в топ выдачи.",
    price: "от 40 000 ₽"
  },
  {
    icon: <MousePointerClick className="w-10 h-10 text-indigo-600" />,
    title: "Аудит Рекламы",
    desc: "Найду дыры, куда сливается бюджет. Дам конкретный план по снижению стоимости заявки.",
    price: "Бесплатно"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
            Чем я могу быть <span className="text-purple-600 italic">полезна?</span>
          </h2>
          <p className="text-xl text-gray-500 font-sans">
            Комплексные решения для роста вашего бизнеса. Выбирайте то, что нужно именно вам.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl w-fit">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-500 font-sans mb-6 leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-auto pt-6 border-t border-gray-100">
                <p className="text-lg font-bold text-gray-900">{service.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
