import { Award, TrendingUp, Search, Star } from "lucide-react";
import olyaProfile from "@/assets/images/olya-profile.jpg";

export function About() {
  const skills = [
    { icon: <Award className="w-6 h-6 text-red-500" />, title: "2 Красных Диплома", desc: "Умная - страшно! (В хорошем смысле)" },
    { icon: <TrendingUp className="w-6 h-6 text-blue-500" />, title: "Яндекс.Директ", desc: "Настраиваю так, что клиенты плачут от счастья" },
    { icon: <Search className="w-6 h-6 text-green-500" />, title: "Авитолог", desc: "Продам даже снег зимой (но лучше заводы)" },
    { icon: <Star className="w-6 h-6 text-yellow-500" />, title: "Супер Девушка", desc: "Кирилл подтвердит (у него нет выбора)" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Кто такая Ольга Николаевна?</h2>
          <p className="text-xl text-gray-600">Краткий экскурс в её величие</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-2xl hover:bg-purple-50 transition-colors border border-gray-100 hover:border-purple-200 shadow-sm hover:shadow-md group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{skill.title}</h3>
                <p className="text-gray-600 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 h-[450px] md:w-80 md:h-[500px]">
              <div className="absolute inset-0 bg-pink-200 rounded-[2rem] transform -rotate-3 scale-105"></div>
              <div className="absolute inset-0 bg-purple-200 rounded-[2rem] transform rotate-2 scale-105 opacity-50"></div>
              <img 
                src={olyaProfile} 
                alt="Ольга Профиль" 
                className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
