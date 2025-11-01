import { Award } from "lucide-react";

export default function ConceptSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0D0D0D] to-[#141414]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4">
          <Award className="w-12 h-12 text-gold mx-auto mb-4" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          あなたの理想を
          <span className="text-gold block mt-2">科学的にデザイン</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
          単なるトレーニングではなく、<span className="text-gold font-semibold">「目的達成に最適化された設計」</span>。
          <br />
          あなたの体質・生活リズム・目標をもとに、最も効率的なメニューを科学的根拠に基づいて提案します。
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: "🎯", title: "個別最適化", desc: "一人ひとりの体質と目標に合わせた完全カスタマイズプラン" },
            { icon: "📊", title: "科学的アプローチ", desc: "エビデンスに基づいたトレーニング・栄養指導" },
            { icon: "⚡", title: "最短ルート", desc: "無駄を排除し、最も効率的なアプローチで結果を追求" },
          ].map((item) => (
            <div key={item.title} className="bg-[#1C1C1C] p-8 rounded-2xl border border-white/5 hover:border-gold/30 transition-all">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gold">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

