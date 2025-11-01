import { Award, Users, CheckCircle2 } from "lucide-react";

export default function TrainerSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#141414] to-[#0D0D0D]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            代表<span className="text-gold">トレーナー</span>
          </h2>
          <p className="text-xl text-gray-400">フィジークレベルの指導で、あなたの目標達成をサポート</p>
        </div>
        
        <div className="bg-[#1C1C1C] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="md:flex">
            <div className="md:w-2/5 relative h-96 md:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
              <div className="bg-[#0D0D0D] h-full flex items-center justify-center">
                <span className="text-gray-600">トレーナー写真</span>
              </div>
            </div>
            <div className="md:w-3/5 p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  五十嵐 脩平
                </h3>
                <p className="text-gold text-lg font-medium">JBBF メンズフィジーク選手</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">主な実績</p>
                    <p className="text-gray-300 text-sm">
                      JBBFメンズフィジーク選手権 出場<br />
                      年間50名以上のボディメイクをサポート
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">指導実績</p>
                    <p className="text-gray-300 text-sm">
                      累計指導人数: 200名以上<br />
                      フィジーク大会出場者: 15名以上
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">資格・専門性</p>
                    <p className="text-gray-300 text-sm">
                      NASM-PES / 栄養管理士<br />
                      科学的根拠に基づいたトレーニング指導
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0D0D0D] p-6 rounded-xl border border-gold/20">
                <p className="text-gray-300 leading-relaxed">
                  「大会に出られるレベルの体を作る」ことを目標に、科学的根拠に基づいた指導を行っています。
                  一人ひとりの体質・目標に合わせて最適なプランを設計し、最短ルートで理想の身体を実現するお手伝いをしています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

