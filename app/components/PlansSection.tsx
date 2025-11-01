import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function PlansSection() {
  const plans = [
    {
      title: "週1プラン",
      price: "¥32,000",
      period: "月",
      desc: "週1回 × 60分 / 月4回",
      features: [
        "パーソナルトレーニング 60分",
        "トレーニングメニュー作成",
        "基本の栄養アドバイス",
        "LINEサポート",
      ],
      recommended: false,
    },
    {
      title: "週2プラン",
      price: "¥58,000",
      period: "月",
      desc: "週2回 × 60分 / 月8回",
      features: [
        "パーソナルトレーニング 60分",
        "完全カスタマイズメニュー",
        "詳細な栄養管理サポート",
        "24時間LINEサポート",
        "定期的な体組成測定",
      ],
      recommended: true,
    },
    {
      title: "オンラインプラン",
      price: "¥15,000",
      period: "月",
      desc: "オンライン × 週1回 / 月4回",
      features: [
        "オンライントレーニング 60分",
        "トレーニングメニュー提供",
        "栄養指導（オンライン）",
        "チャットサポート",
      ],
      recommended: false,
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            トレーニング<span className="text-gold">プラン</span>
          </h2>
          <p className="text-xl text-gray-400">あなたのペースに合わせた最適なプランを選択</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`bg-[#1C1C1C] rounded-2xl p-8 shadow-lg flex flex-col border transition-all relative ${
                plan.recommended
                  ? "border-gold shadow-gold/20 scale-105 md:scale-110"
                  : "border-white/10 hover:border-gold/30"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold text-black px-4 py-1 rounded-full text-sm font-bold">
                    人気No.1
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.desc}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gold">{plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full ${
                  plan.recommended
                    ? "bg-gold text-black hover:bg-gold/90"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                } py-6 rounded-full font-semibold transition-all hover:scale-105`}
                size="lg"
              >
                今すぐ申し込む
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            ※ 初回体験トレーニング（60分）: <span className="text-gold font-semibold">¥5,000</span>
          </p>
          <p className="text-sm text-gray-500">
            すべてのプランで、まずは体験トレーニングからスタートできます
          </p>
        </div>
      </div>
    </section>
  );
}

