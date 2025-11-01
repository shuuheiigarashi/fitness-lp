import { Quote } from "lucide-react";

export default function ResultsSection() {
  const results = [
    {
      name: "T.K様（30代男性）",
      period: "3ヶ月",
      beforeDesc: "体重75kg、体脂肪率18%",
      afterDesc: "体重73kg、体脂肪率10%",
      testimonial: "週2回のトレーニングで、想像以上の変化を実感。トレーナーさんの指導が的確で、モチベーションも維持できました。",
    },
    {
      name: "M.S様（20代女性）",
      period: "2ヶ月",
      beforeDesc: "ボディラインに課題",
      afterDesc: "美しいシェイプアップ達成",
      testimonial: "科学的なアプローチで効率的に理想の体型に近づけました。食事指導も含めてサポートしていただけて心強かったです。",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            圧倒的な<span className="text-gold">実績</span>
          </h2>
          <p className="text-xl text-gray-400">Before / After から見る、本物の変化</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {results.map((result, idx) => (
            <div key={idx} className="bg-[#1C1C1C] rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all">
              <div className="grid grid-cols-2 gap-4 p-6">
                <div className="bg-[#0D0D0D] rounded-lg aspect-[3/4] flex items-center justify-center border border-white/10">
                  <span className="text-gray-600 text-sm">Before</span>
                </div>
                <div className="bg-[#0D0D0D] rounded-lg aspect-[3/4] flex items-center justify-center border border-gold/30">
                  <span className="text-gold text-sm font-semibold">After</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg">{result.name}</h3>
                    <p className="text-sm text-gray-400">{result.period}のトレーニング</p>
                  </div>
                  <span className="px-3 py-1 bg-gold/20 text-gold rounded-full text-xs font-semibold">
                    {result.period}
                  </span>
                </div>
                <div className="mb-4 space-y-2 text-sm">
                  <p className="text-gray-400">
                    <span className="text-white">Before:</span> {result.beforeDesc}
                  </p>
                  <p className="text-gold">
                    <span className="text-white">After:</span> {result.afterDesc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <Quote className="w-5 h-5 text-gold/50 mb-2" />
                  <p className="text-gray-300 text-sm leading-relaxed italic">
                    「{result.testimonial}」
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

