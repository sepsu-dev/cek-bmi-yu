import { BMICalculator } from "@/components/bmi-calculator";
import { Heart, Activity } from "lucide-react";

export function generateMetadata() {
  return {
    title: "cekbmiyuk - Cek Berat Badan Idealmu",
    description: "Cara simpel dan estetik untuk cek BMI dan kesehatan tubuhmu secara instan.",
  };
}

export default function BMIAppPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans selection:bg-[#00C9B1]/20 relative overflow-hidden flex items-center justify-center p-6">
      {/* Soft Background Accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00C9B1]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#7C3AED]/5 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl w-full relative z-10">
        <main className="flex items-center justify-center">
           <BMICalculator />
        </main>
      </div>
    </div>
  );
}