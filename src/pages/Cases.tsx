import { Target, MousePointer, BarChart3, Layout, Zap } from "lucide-react";
import { useEffect } from "react";
import medtechImg from "@/assets/images/cases/medtech.png";
import voltgameImg from "@/assets/images/cases/voltgame.png";
import crazydriftImg from "@/assets/images/cases/crazydrift.png";
import scnautoImg from "@/assets/images/cases/scnauto.png";
import creativesImg from "@/assets/images/cases/creatives.png";

const colorMap: Record<string, { border: string; bgLight: string; text: string; bgStat: string; borderStat: string; textStat: string; bgBadge: string; textBadge: string }> = {
  blue: { border: "border-blue-200", bgLight: "bg-blue-500/10", text: "text-blue-600", bgStat: "bg-blue-50", borderStat: "border-blue-100", textStat: "text-blue-600", bgBadge: "bg-blue-100", textBadge: "text-blue-700" },
  orange: { border: "border-orange-200", bgLight: "bg-orange-500/10", text: "text-orange-600", bgStat: "bg-orange-50", borderStat: "border-orange-100", textStat: "text-orange-600", bgBadge: "bg-orange-100", textBadge: "text-orange-700" },
  green: { border: "border-green-200", bgLight: "bg-green-500/10", text: "text-green-600", bgStat: "bg-green-50", borderStat: "border-green-100", textStat: "text-green-600", bgBadge: "bg-green-100", textBadge: "text-green-700" },
  red: { border: "border-red-200", bgLight: "bg-red-500/10", text: "text-red-600", bgStat: "bg-red-50", borderStat: "border-red-100", textStat: "text-red-600", bgBadge: "bg-red-100", textBadge: "text-red-700" },
  purple: { border: "border-purple-200", bgLight: "bg-purple-500/10", text: "text-purple-600", bgStat: "bg-purple-50", borderStat: "border-purple-100", textStat: "text-purple-600", bgBadge: "bg-purple-100", textBadge: "text-purple-700" },
};

export default function Cases() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Кейсы — Ольга Николаевна";
  }, []);

  const cases = [
    {
      title: "Voltgame: Франшиза VR-арены",
      category: "Контекстная реклама + Квиз",
      image: voltgameImg,
      stats: [
        { label: "Лиды", value: "2-4", sub: "горячих заявки / 2 недели" },
        { label: "ROI", value: "100%+", sub: "окупаемость рекламы" }
      ],
      desc: "Внедрила связку «Контекст + Квиз». Оптимизировала сайт за 3 часа, запустила рекламу за 2 дня. Результат: стабильный поток заявок, полностью покрывающий расходы.",
      color: "blue"
    },
    {
      title: "Crazy Drift: Квалификация лидов",
      category: "Лидогенерация",
      image: crazydriftImg,
      stats: [
        { label: "Экономия", value: "30%", sub: "времени отдела продаж" },
        { label: "Конверсия", value: "↑", sub: "в продажу франшизы" }
      ],
      desc: "Внедрила квиз для отсева нецелевых обращений. Потенциальный франчайзи отвечает на 3 вопроса и получает финмодель. Отдел продаж получает уже «прогретого» клиента.",
      color: "orange"
    },
    {
      title: "МедТех: Выставка медоборудования",
      category: "Аудит и Оптимизация",
      image: medtechImg,
      stats: [
        { label: "CTR", value: "+25%", sub: "рост кликабельности" },
        { label: "Юзабилити", value: "Top", sub: "после редизайна" }
      ],
      desc: "Провела глубокий аудит сайта выставки. Предложила улучшения структуры и офферов, которые были внедрены и дали рост конверсии.",
      color: "green"
    },
    {
      title: "SCN Auto: Конверсионный сайт",
      category: "Web-разработка",
      image: scnautoImg,
      stats: [
        { label: "Дизайн", value: "UX/UI", sub: "современный стиль" },
        { label: "Адаптив", value: "100%", sub: "мобильная версия" }
      ],
      desc: "Разработала продающий сайт для автотематики. Акцент на удобство пользователя и быстрый захват контакта.",
      color: "red"
    },
    {
      title: "Креативы и Дизайн",
      category: "Графический дизайн",
      image: creativesImg,
      stats: [
        { label: "Срок", value: "10 мин", sub: "на быстрый креатив" },
        { label: "Инструменты", value: "AI+", sub: "Figma, Photoshop" }
      ],
      desc: "Создаю кликабельные креативы для РСЯ и соцсетей. Тестирую десятки гипотез для поиска лучшей связки «Картинка + Заголовок».",
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main id="main-content" className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl 3xl:max-w-7xl">
          
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-4">
              🚀 Только реальные цифры
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Мои Кейсы
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Не просто "настраиваю рекламу", а строю системы продаж. 
              Смотрите, как я решаю задачи бизнеса.
            </p>
          </div>

          <div className="space-y-20">
            {cases.map((item, index) => (
              <div key={item.title} className={`group relative bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 transition-all hover:shadow-2xl`}>
                <div className="grid lg:grid-cols-2 gap-0">
                  
                  {/* Image Side */}
                  <div className={`relative min-h-[300px] lg:min-h-[500px] bg-gray-50 flex items-center justify-center p-8 md:p-12 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    
                    {/* Browser Mockup Container */}
                    <div className="relative w-full max-w-lg mx-auto transform group-hover:scale-105 transition-transform duration-700">
                      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                        {/* Browser Header */}
                        <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        {/* Image */}
                        <div className="aspect-[16/10] relative overflow-hidden bg-white">
                          <img
                            src={item.image}
                            alt={`Скриншот проекта: ${item.title} — ${item.category}`}
                            loading="lazy"
                            className="w-full h-full object-cover object-top"
                          />
                          {/* Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                        </div>
                      </div>
                      
                      {/* Decorative elements behind */}
                      <div className={`absolute -top-4 -right-4 w-full h-full border-2 ${colorMap[item.color].border} rounded-xl -z-10`}></div>
                      <div className={`absolute -bottom-4 -left-4 w-24 h-24 ${colorMap[item.color].bgLight} rounded-full blur-2xl -z-10`}></div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                       <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-white/90 backdrop-blur ${colorMap[item.color].text} shadow-sm`}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="mb-8">
                      <span className={`hidden lg:inline-block px-4 py-1.5 rounded-full text-sm font-bold ${colorMap[item.color].bgBadge} ${colorMap[item.color].textBadge} mb-4`}>
                        {item.category}
                      </span>
                      <h2 className="hidden lg:block text-3xl font-bold text-gray-900 mb-4">{item.title}</h2>
                      <h2 className="lg:hidden text-2xl font-bold text-gray-900 mb-4 mt-4">{item.title}</h2>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Target className={`w-6 h-6 ${colorMap[item.color].text}`} />
                        Задача и Решение
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                      {item.stats.map((stat, i) => (
                        <div key={stat.label} className={`${colorMap[item.color].bgStat} p-4 rounded-2xl border ${colorMap[item.color].borderStat}`}>
                          <div className={`text-3xl font-bold ${colorMap[item.color].textStat} mb-1`}>{stat.value}</div>
                          <div className="text-sm font-medium text-gray-900">{stat.label}</div>
                          <div className="text-xs text-gray-500 mt-1">{stat.sub}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-600">
                        <Layout className="w-4 h-4" /> Сайт / Лендинг
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-600">
                        <MousePointer className="w-4 h-4" /> Контекст
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-600">
                        <BarChart3 className="w-4 h-4" /> Аналитика
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-br from-purple-600 to-pink-600 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Хотите такие же результаты?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Давайте обсудим ваш проект. Я проведу аудит текущей рекламы и предложу стратегию роста.
            </p>
            <a 
              href="https://t.me/o_khor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-50 hover:scale-105 transition-all shadow-lg"
            >
              <Zap className="w-5 h-5" aria-hidden="true" />
              Написать в Telegram
              <span className="sr-only">(открывается в новом окне)</span>
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}
