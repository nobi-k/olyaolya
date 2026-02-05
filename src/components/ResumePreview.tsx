import { FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function ResumePreview() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
                <FileText className="w-4 h-4 text-purple-300" />
                <span>Официальный документ</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Резюме, которое <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">невозможно игнорировать</span>
              </h2>
              
              <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
                Вся правда об опыте, образовании и сверхспособностях Ольги Николаевны. 
                Спойлер: там всё идеально, как и она сама.
              </p>

              <Link 
                to="/resume" 
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-purple-50 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10"
              >
                Читать Резюме <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex-1 w-full max-w-md relative">
              {/* Abstract Resume Representation */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 text-gray-800 text-sm">
                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="w-32 h-4 bg-gray-800 rounded mb-2"></div>
                    <div className="w-24 h-3 bg-gray-400 rounded"></div>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="w-full h-2 bg-gray-100 rounded"></div>
                  <div className="w-5/6 h-2 bg-gray-100 rounded"></div>
                  <div className="w-4/6 h-2 bg-gray-100 rounded"></div>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-purple-100 text-purple-600 rounded text-xs font-bold">Marketing</div>
                  <div className="px-3 py-1 bg-pink-100 text-pink-600 rounded text-xs font-bold">Direct</div>
                </div>
                
                {/* Stamp */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-500 text-white rounded-full flex items-center justify-center font-black border-4 border-white shadow-lg transform -rotate-12">
                  TOP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
