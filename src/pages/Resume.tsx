import { ArrowLeft, Briefcase, GraduationCap, Code, Star, Heart, MapPin, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import olyaProfile from "@/assets/images/olya-profile.jpg";

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experiences = [
    {
      role: "Специалист по контекстной рекламе / Директолог",
      company: "Индивидуальное предпринимательство / Freelance",
      period: "Март 2024 — Настоящее время",
      desc: (
        <ul className="list-disc pl-4 space-y-2">
          <li><strong>Продвижение B2B (Трубопроводная арматура):</strong> Снизила стоимость целевой заявки (CPL) на 18% за 3 месяца.</li>
          <li><strong>Промышленное оборудование:</strong> Маркетинговая поддержка завода индукционного оборудования → рост квалифицированных лидов на 25%.</li>
          <li><strong>Франшиза Voltgame:</strong> Внедрила связку «контекст + квиз», обеспечив стабильный поток 2-4 "горячих" заявок каждые 2 недели (полное покрытие расходов).</li>
          <li><strong>Аналитика и SEO:</strong> Аудит сайтов увеличил CTR в поиске до 25%. Настройка сквозной аналитики (Roistat, Callibri) и CRM.</li>
          <li><strong>Креативы:</strong> Тестирование 10+ связок «креатив-оффер» для РСЯ. Создание воронок продаж через чат-боты.</li>
        </ul>
      )
    }
  ];

  const education = [
    {
      degree: "Магистр (Медиакоммуникации)",
      school: "Казанский (Приволжский) федеральный университет",
      year: "2025"
    },
    {
      degree: "Курс «Маркетинговые связки 2025»",
      school: "Сергей Нагорный",
      year: "2025"
    },
    {
      degree: "Основы SMM",
      school: "НейроSMM",
      year: "2024"
    },
    {
      degree: "Школа графического дизайна",
      school: "Unid",
      year: "2024"
    }
  ];

  const skills = [
    "Яндекс.Директ (Expert)",
    "Яндекс.Метрика",
    "Google Ads / SEO",
    "Adobe Photoshop / Illustrator",
    "Figma / Canva / Supa",
    "Tilda / Создание сайтов",
    "Roistat / Callibri",
    "AI (ChatGPT, Gemini, Midjourney)",
    "SMM / Копирайтинг"
  ];

  const achievements = [
    "Автор научной статьи «Интеграция нейросетевой алгоритмизации в Яндекс Директ»",
    "Автор 10+ научных трудов в медиа и маркетинге",
    "Победитель международных научно-образовательных конференций"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" />
            На Главную
          </Link>
          <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Резюме
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          
          {/* Header Card */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-purple-100 mb-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-pulse opacity-20"></div>
              <img 
                src={olyaProfile} 
                alt="Ольга Николаевна" 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10"
              />
              <div className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md z-20 text-2xl" title="Супер-класс!">
                ✨
              </div>
            </div>
            
            <div className="text-center md:text-left relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                Хорошавина Ольга
              </h1>
              <p className="text-xl text-purple-600 font-medium mb-6">
                Специалист по контекстной рекламе / Маркетолог
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600 text-sm md:text-base">
                <a
                  href="https://t.me/o_khor"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full hover:bg-purple-50 hover:text-purple-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-purple-500" />
                  @o_khor
                </a>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
                  <MapPin className="w-4 h-4 text-purple-500" />
                  Казань (Готова к переезду)
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
                  <Briefcase className="w-4 h-4 text-purple-500" />
                  Опыт 2+ года
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Left Column (Main Info) */}
            <div className="md:col-span-2 space-y-8">
              
              {/* About Me */}
              <section className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                 <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                    <Star className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Обо мне</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Специалист по контекстной рекламе с системным подходом. Приношу измеримый результат (лиды/продажи). 
                  Владею моделями анализа ЦА (JTBD, 6W, 4U). Умею делать "быстрые креативы" за 10 минут и писать экспертные AI-промты.
                </p>
              </section>

              {/* Experience */}
              <section className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Опыт работы</h2>
                </div>
                
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-purple-100 last:border-0 pb-2">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-sm"></div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                      <div className="text-purple-600 font-medium mb-4">{exp.company} | {exp.period}</div>
                      <div className="text-gray-600 leading-relaxed text-sm">{exp.desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Образование</h2>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-2xl hover:bg-red-50 transition-colors">
                      <h3 className="font-bold text-gray-900 mb-1">{edu.degree}</h3>
                      <p className="text-gray-600 text-sm">{edu.school}</p>
                      <p className="text-gray-400 text-xs mt-2">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Right Column (Sidebar) */}
            <div className="space-y-8">
              
              {/* Skills */}
              <section className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                    <Code className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Навыки</h2>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Achievements */}
              <section className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 shadow-lg text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white">
                    <Award className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold">Достижения</h2>
                </div>
                
                <ul className="space-y-4 text-sm">
                  {achievements.map((item, i) => (
                     <li key={i} className="flex items-start gap-3">
                     <Star className="w-5 h-5 mt-0.5 shrink-0 opacity-80" />
                     <span>{item}</span>
                   </li>
                  ))}
                  <li className="flex items-start gap-3 mt-6 pt-6 border-t border-white/20">
                    <Heart className="w-5 h-5 mt-0.5 shrink-0 opacity-80" />
                    <span>Идеальная жена (по версии Кирилла)</span>
                  </li>
                </ul>
              </section>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
