"use client";

import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Y.T様（30代・男性）",
      rating: 5,
      text: "科学的なアプローチが素晴らしい。3ヶ月で体脂肪率を8%も減らせました。トレーナーの指導が的確で、モチベーションも維持できました。",
      plan: "週2プラン",
    },
    {
      name: "K.N様（20代・女性）",
      rating: 5,
      text: "完全にカスタマイズされたメニューで、無理なく理想の体型に近づけました。栄養指導も含めてサポートしていただけて心強かったです。",
      plan: "週1プラン",
    },
    {
      name: "S.M様（40代・男性）",
      rating: 5,
      text: "オンラインプランを利用しています。自宅でもしっかり指導していただけるので、忙しい中でも続けられています。結果も出ています。",
      plan: "オンラインプラン",
    },
    {
      name: "A.K様（20代・女性）",
      rating: 5,
      text: "フィジーク大会を目指して通い始めました。大会に出場できるレベルまで引き上げていただき、本当に感謝しています。",
      plan: "週2プラン",
    },
    {
      name: "H.S様（30代・男性）",
      rating: 5,
      text: "他のジムとは指導の質が違います。科学的根拠に基づいたアプローチで、無駄なく効率的に結果を出せました。",
      plan: "週1プラン",
    },
    {
      name: "M.I様（20代・女性）",
      rating: 5,
      text: "初めてのパーソナルトレーニングでしたが、とても丁寧に指導していただきました。2ヶ月で見た目が明らかに変わり、自信がつきました。",
      plan: "週1プラン",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            お客様の<span className="text-gold">声</span>
          </h2>
          <p className="text-xl text-gray-400">実際にご利用いただいたお客様からのレビュー</p>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          className="testimonials-swiper"
        >
          {testimonials.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-[#1C1C1C] rounded-xl p-6 border border-white/5 hover:border-gold/30 transition-all h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-gold">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                    {review.plan}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
                  {review.text}
                </p>
                <p className="text-sm text-gold font-semibold">{review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
