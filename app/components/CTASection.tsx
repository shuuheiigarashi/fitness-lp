import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gold/10 via-gold/5 to-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 pattern-dark opacity-30" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          無料カウンセリング
          <span className="block text-gold mt-2">受付中</span>
        </h2>
        <p className="text-xl text-gray-300 mb-4">
          あなたの目標や課題をお聞かせください
        </p>
        <p className="text-lg text-gray-400 mb-12">
          最適なプランをご提案いたします。LINEまたはお問い合わせフォームよりご予約ください。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            className="bg-gold text-black hover:bg-gold/90 text-lg px-12 py-7 rounded-full font-semibold shadow-lg shadow-gold/30 transition-all hover:scale-105"
            size="lg"
          >
            LINEで予約する
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-12 py-7 rounded-full backdrop-blur-sm transition-all hover:scale-105"
            size="lg"
          >
            お問い合わせフォーム
          </Button>
        </div>
        
        <div className="mt-12 p-6 bg-[#1C1C1C] rounded-xl border border-white/10 inline-block">
          <p className="text-sm text-gray-400">
            <span className="text-gold font-semibold">✓</span> カウンセリングは完全無料
            <span className="mx-3">|</span>
            <span className="text-gold font-semibold">✓</span> 営業・勧誘は一切行いません
            <span className="mx-3">|</span>
            <span className="text-gold font-semibold">✓</span> 当日でもご予約可能
          </p>
        </div>
      </div>
    </section>
  );
}

