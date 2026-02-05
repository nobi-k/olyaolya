import { ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import voltgameImg from "@/assets/images/cases/voltgame.png";
import medtechImg from "@/assets/images/cases/medtech.png";
import scnautoImg from "@/assets/images/cases/scnauto.png";

export function CasesPreview() {
  const previewCases = [
    {
      title: "Voltgame",
      desc: "Франшиза VR-арены: 2-4 горячих лида каждые 2 недели",
      image: voltgameImg,
      tag: "Контекст + Квиз"
    },
    {
      title: "МедТех",
      desc: "Выставка оборудования: Рост CTR на 25% после аудита",
      image: medtechImg,
      tag: "Аудит"
    },
    {
      title: "SCN Auto",
      desc: "Продающий сайт для автотематики с высокой конверсией",
      image: scnautoImg,
      tag: "Web-разработка"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-4">
              <Briefcase className="w-4 h-4" />
              Портфолио
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Мои работы говорят <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                громче слов
              </span>
            </h2>
          </div>
          
          <Link 
            to="/cases" 
            className="hidden md:inline-flex items-center gap-2 text-lg font-bold text-gray-900 hover:text-purple-600 transition-colors group"
          >
            Смотреть все кейсы 
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {previewCases.map((item, index) => (
            <Link key={index} to="/cases" className="group block">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white">
                {/* Browser Header Mockup */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-gray-100/90 backdrop-blur-sm z-10 flex items-center px-3 gap-1.5 border-b border-gray-200">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-top pt-6 transform group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute top-8 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-gray-900 shadow-sm border border-gray-100">
                    {item.tag}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link 
            to="/cases" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full font-bold text-gray-900 hover:bg-gray-50 transition-colors"
          >
            Смотреть все кейсы <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
