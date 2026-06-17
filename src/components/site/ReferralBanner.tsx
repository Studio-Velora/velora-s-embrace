import { useState, useEffect } from "react";

export function ReferralBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("sv_referral_dismissed") === "1") {
      setVisible(false);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem("sv_referral_dismissed", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="relative z-[60] bg-accent text-background">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-6 py-2.5 text-sm lg:px-12">
        <div className="flex-1 text-center">
          <span className="hidden sm:inline">🎁 </span>
          <strong>Verwijs een klant — beide 50% korting</strong> op een nieuwe website.{" "}
          <a href="/referral-voorwaarden" className="underline underline-offset-2 hover:opacity-80">
            Bekijk voorwaarden
          </a>
        </div>
        <button
          onClick={dismiss}
          className="shrink-0 opacity-70 hover:opacity-100 text-lg leading-none"
          aria-label="Sluiten"
        >
          ×
        </button>
      </div>
    </div>
  );
}
