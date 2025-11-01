import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gold">Physique Fitness</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              理想の身体を、科学的にデザインする。
              <br />
              フィジークレベルのボディメイクをサポート。
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">店舗情報</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>〒000-0000</p>
              <p>東京都渋谷区○○○1-2-3</p>
              <p className="mt-3">営業時間: 9:00 - 22:00</p>
              <p>定休日: 不定休</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">SNS</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#1C1C1C] rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <span className="text-sm font-bold">IG</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#1C1C1C] rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-colors"
                aria-label="Twitter"
              >
                <span className="text-sm font-bold">X</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#1C1C1C] rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-colors"
                aria-label="YouTube"
              >
                <span className="text-sm font-bold">YT</span>
              </a>
            </div>
            <div className="mt-6">
              <Button
                variant="outline"
                className="w-full border-gold text-gold hover:bg-gold hover:text-black"
              >
                LINE公式アカウント
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>© 2025 Physique Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

