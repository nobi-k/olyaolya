import { Heart, Quote } from "lucide-react";
import olya1 from "@/assets/images/olya-1.jpg";
import olyaProfile from "@/assets/images/olya-profile.jpg";
import olya3 from "@/assets/images/olya-3.jpg";

export function LoveStory() {
  const images = [olya1, olyaProfile, olya3];

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Heart className="w-12 h-12 text-red-500 animate-pulse fill-red-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Мнение эксперта (Кирилла)</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Кирилл Георгиевич (крутой маркетолог) провёл независимое исследование и выяснил:
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl max-w-4xl mx-auto relative mb-20 border border-pink-100">
          <Quote className="absolute top-8 left-8 text-pink-200 w-16 h-16 -z-10 transform -scale-x-100" />
          
          <blockquote className="text-xl md:text-2xl text-center italic text-gray-800 mb-8 leading-relaxed relative z-10">
            "Оля - это не только лучший директолог, который продаст любой бетонный завод, но и <span className="text-pink-600 font-bold bg-pink-50 px-2 rounded">идеальная жена</span>. 
            У неё два красных диплома, а значит она в два раза умнее меня (но тссс!).
            Люблю её больше, чем высокий CTR!"
          </blockquote>
          
          <div className="text-center">
             <div className="font-bold text-gray-900 text-lg">Кирилл Георгиевич</div>
             <div className="text-pink-500 text-sm font-medium">Маркетолог, парень, счастливчик</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 ring-4 ring-white ring-offset-4 ring-offset-pink-50">
              <img 
                src={img} 
                alt={`Оля фото ${i+1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg">Прекрасна! ❤️</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
