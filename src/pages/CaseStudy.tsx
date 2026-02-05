import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function CaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" />
            Назад к Ольге
          </Link>
          <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Камская Усадьба
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero of Case */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Брендбук "Камская Усадьба"
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Комплексная разработка фирменного стиля: от логотипа до навигации. 
              Задача была передать атмосферу элитного загородного отдыха, и Ольга справилась блестяще.
            </p>
          </div>

          {/* PDF Viewer / Gallery Placeholder */}
          <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 min-h-[80vh]">
            <div className="w-full h-full flex flex-col">
              <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
                <span className="font-medium">Просмотр Брендбука</span>
                <a 
                  href="./brandbook.pdf" 
                  download 
                  className="flex items-center gap-2 text-sm hover:text-purple-300 transition-colors"
                >
                  <Download className="w-4 h-4" /> Скачать оригинал
                </a>
              </div>
              {/* PDF Embed */}
              <iframe 
                src="./brandbook.pdf" 
                className="w-full h-[80vh] md:h-[100vh]"
                title="Брендбук Камская Усадьба"
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-purple-50 rounded-2xl">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-bold text-lg mb-2">Цветовая гамма</h3>
              <p className="text-gray-600 text-sm">Подобраны природные оттенки, подчеркивающие экологичность и статус.</p>
            </div>
            <div className="p-6 bg-pink-50 rounded-2xl">
              <div className="text-4xl mb-4">✒️</div>
              <h3 className="font-bold text-lg mb-2">Типографика</h3>
              <p className="text-gray-600 text-sm">Использованы современные гротески для читаемости и стиля.</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-2xl">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="font-bold text-lg mb-2">Логотип</h3>
              <p className="text-gray-600 text-sm">Уникальный знак, объединяющий архитектуру и природу.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
