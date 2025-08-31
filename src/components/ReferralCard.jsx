import React, { useState } from "react";

/**
 * ReferralGiftCard
 * - Visual: looks like a present/gift box using a green palette.
 * - Features: referral link, copy-to-clipboard (no unused catch param), social share, CTA, subtle animations.
 * - Usage: <ReferralGiftCard referralUrl="https://..." />
 */

export default function ReferralGiftCard({
  referralUrl = "https://alprimus.com/register?sponsor=5766580&side=right",
  title = "Get Paid in USDT (BEP20)",
  subtitle = "Unique JOINING & PAYOUT IN USDT BEP20",
  note = "First time earning in USD — payouts to BEP20 wallets.",
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback (no unused variable)
      const el = document.createElement("textarea");
      el.value = referralUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareText = encodeURIComponent(
    `${title} — ${subtitle}\n\nJoin here: ${referralUrl}`
  );
  const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
    referralUrl
  )}&text=${encodeURIComponent(title + " — " + subtitle)}`;

  return (
    <>
      <div
        className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1719432270124-5c1327c63747?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <aside className="max-w-lg mx-auto p-6 pt-40">
          {/* Gift wrapper */}
          <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-2xl shadow-2xl transform transition hover:scale-[1.01]">
            {/* Ribbon vertical */}
            <div className="absolute inset-y-0 left-1/2 w-10 -translate-x-1/2 bg-emerald-700 rounded-md shadow-md transform rotate-0"></div>

            {/* Ribbon horizontal */}
            <div className="absolute top-8 left-6 right-6 h-10 bg-emerald-700 rounded-md shadow-md"></div>

            {/* Bow */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-2 items-center justify-center">
              <div className="w-10 h-6 bg-emerald-800 rounded-full transform -rotate-12 scale-x-125 shadow-inner"></div>
              <div className="w-10 h-6 bg-emerald-900 rounded-full transform rotate-12 scale-x-125 shadow-inner"></div>
            </div>

            {/* Content */}
            <div className="relative p-6 pt-20">
              <div className="bg-white/90 rounded-xl p-4 shadow-md ring-1 ring-black/5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-lg font-bold shadow">
                    ₮
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-extrabold text-emerald-800">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-emerald-700 font-medium">
                      {subtitle}
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-emerald-700">{note}</p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                  <a
                    href={referralUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md font-semibold shadow transition"
                    aria-label="Join now"
                  >
                    Join & Earn
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>

                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center justify-center gap-2 border border-emerald-200 bg-white hover:bg-emerald-50 px-4 py-2 rounded-md font-medium text-emerald-800 transition shadow-sm"
                    aria-label="Copy referral link"
                  >
                    {copied ? "Copied!" : "Copy Link"}
                    <svg
                      className="w-4 h-4 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 01-1 1h-4M16 21H6a2 2 0 01-2-2V7a2 2 0 012-2h8"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-900 text-sm font-medium"
                  >
                    Share on Twitter
                  </a>
                  <a
                    href={telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-900 text-sm font-medium"
                  >
                    Share on Telegram
                  </a>
                </div>

                <div className="mt-4 text-xs text-emerald-600">
                  Payouts in USDT (BEP20). Withdraw to your BEP20 wallet.
                </div>
              </div>

              {/* Decorative present base shadow */}
              <div className="mt-4 h-3 rounded-b-lg bg-emerald-900/10"></div>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-3 text-center text-sm text-white">
            First time make money in USD — start earning today.
          </div>
        </aside>
      </div>
    </>
  );
}
