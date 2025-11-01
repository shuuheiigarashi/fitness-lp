import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 z-[1]" />
      <Image
        src="/hero.jpg"
        alt="フィットネスジム Hero"
        fill
        className="object-cover opacity-30"
        priority
      />
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 inline-block px-4 py-2 bg-gold/20 border border-gold/30 rounded-full text-gold text-sm font-medium backdrop-blur-sm">
          科学的にデザインされたボディメイク
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gold">理想の身体</span>
          <br />
          を、科学的にデザインする
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light">
          最短で「見た目が変わる」体験を。
          <br className="hidden md:block" />
          フィジークレベルのボディメイクをサポート
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-gold text-black hover:bg-gold/90 text-lg px-10 py-7 rounded-full font-semibold shadow-lg shadow-gold/20 transition-all hover:scale-105"
            size="lg"
          >
            無料カウンセリングはこちら
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-10 py-7 rounded-full backdrop-blur-sm transition-all hover:scale-105"
            size="lg"
          >
            プランを見る
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}

