import { Download, Palette, Layout, PenTool, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export function DesignCase() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-4">
            🎨 Талантливый человек талантлив во всём
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 uppercase">
            А ещё она крутой дизайнер!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Не только заводы продаёт, но и красоту наводит. Зацените стиль на примере реального кейса.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-purple-100">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gray-900 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
                Камская Усадьба
              </h3>
              <p className="text-gray-300 text-lg mb-8 relative z-10 leading-relaxed">
                Полный брендинг для элитного загородного комплекса. Логотип, фирменный стиль, айдентика — всё сделано с душой и вкусом Ольги Николаевны.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 relative z-10">
                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <Palette className="w-6 h-6 text-purple-300" />
                  <span>Фирменный стиль</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <Layout className="w-6 h-6 text-pink-300" />
                  <span>Брендбук</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <PenTool className="w-6 h-6 text-yellow-300" />
                  <span>Логотип</span>
                </div>
              </div>

              <Link 
                to="/case-study" 
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition-colors w-full sm:w-auto relative z-10"
              >
                <ExternalLink className="w-5 h-5" />
                Смотреть кейс целиком
              </Link>
            </div>

            <div className="relative min-h-[400px] bg-gray-100 flex items-center justify-center p-8">
              {/* Placeholder for visual representation since we can't extract PDF images directly yet */}
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Palette className="w-10 h-10 text-purple-600" />
                </div>
                <p className="text-gray-500 text-lg font-medium">
                  Здесь могла быть ваша реклама... <br/>
                  или скриншоты из брендбука!
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  (Нажмите кнопку слева, чтобы открыть PDF)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
