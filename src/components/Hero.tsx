import { ArrowRight } from "lucide-react";
import olyaMain from "@/assets/images/olya-main.jpg";

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-20">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 text-center md:text-left z-10">
          <div className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-bold animate-bounce shadow-sm border border-pink-200">
            👑 Топ-1 Директолог (по версии Кирилла)
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Ольга <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Николаевна
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-[600px] leading-relaxed">
            Продвигаю <span className="font-bold text-purple-700 bg-purple-100 px-1 rounded">бетонные заводы</span>. 
            <span className="block mt-2 text-lg text-gray-500 italic">
              (Именно продажу заводов, а не тех, кто бетон продаёт. Почувствуйте разницу!)
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button 
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-purple-200"
            >
              Почему я такая классная? <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 relative w-full flex justify-center">
          <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
            {/* Decorative blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-10 left-20 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-all duration-500">
              <img 
                src={olyaMain} 
                alt="Ольга Николаевна" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating cards */}
            <div className="absolute top-10 -right-4 md:-right-10 animate-float">
              <div className="bg-white p-3 rounded-lg shadow-xl transform rotate-6">
                <span className="text-2xl">🎓</span> 2 Красных диплома
              </div>
            </div>
            <div className="absolute bottom-10 -left-4 md:-left-10 animate-float animation-delay-2000">
              <div className="bg-white p-3 rounded-lg shadow-xl transform -rotate-6">
                <span className="text-2xl">📈</span> Гуру Директа
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
