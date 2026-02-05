import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-white text-center">
      <div className="container px-4 mx-auto">
        <p className="flex items-center justify-center gap-2 text-lg">
          Сделано с <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" /> для Ольги Николаевны
        </p>
        <p className="mt-2 text-gray-400 text-sm">
          © {new Date().getFullYear()} Все права защищены (Кириллом)
        </p>
      </div>
    </footer>
  );
}
