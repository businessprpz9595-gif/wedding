import { Suspense } from "react";
import WeddingInvitationContent from "@/components/WeddingInvitationContent";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory text-sage-900">
          <div className="flex flex-col items-center gap-4">
            {/* Spinning Gold loading indicator */}
            <div className="w-10 h-10 rounded-full border-2 border-gold-300/35 border-t-gold-600 animate-spin" />
            <span className="text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase animate-pulse">
              Preparing Invitation... 
            </span>
          </div>
        </div>
      }
    >
      <WeddingInvitationContent />
    </Suspense>
  );
}
