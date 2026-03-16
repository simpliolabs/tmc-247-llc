"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie, Settings } from "lucide-react";

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [mounted]);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const acceptSelected = () => {
    const selected = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(selected));
    setShowBanner(false);
    setShowSettings(false);
  };

  const rejectNonEssential = () => {
    const essentialOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(essentialOnly));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!mounted || !showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-navy-950 border-t border-navy-800 shadow-2xl animate-slide-up">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-6 w-6 text-crimson-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-semibold mb-1">Cookie Notice</h3>
                <p className="text-steel-400 text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience and analyze site traffic.
                  By clicking "Accept All", you consent to our use of cookies. Read our{" "}
                  <Link href="/privacy-policy" className="text-crimson-600 hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  for more information.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-steel-300 hover:text-white border border-navy-700 hover:border-navy-600 rounded transition-colors"
              >
                <Settings className="h-4 w-4" />
                Manage
              </button>
              <button
                onClick={rejectNonEssential}
                className="px-4 py-2.5 text-sm font-medium text-steel-300 hover:text-white border border-navy-700 hover:border-navy-600 rounded transition-colors"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-crimson-600 hover:bg-crimson-700 rounded transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {showSettings && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-steel-200">
              <h2 className="text-xl font-bold text-navy-950 font-[Oswald]">Cookie Preferences</h2>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 text-steel-500 hover:text-navy-950 transition-colors"
                aria-label="Close settings"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5 space-y-5">
              <div className="flex items-start gap-4 p-4 bg-steel-100 rounded-lg">
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="mt-1 h-4 w-4 accent-crimson-600"
                />
                <div>
                  <h3 className="font-semibold text-navy-950">Necessary Cookies</h3>
                  <p className="text-sm text-steel-500 mt-1">
                    Required for the website to function properly. These cannot be disabled.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-steel-100 rounded-lg">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="mt-1 h-4 w-4 accent-crimson-600"
                />
                <div>
                  <h3 className="font-semibold text-navy-950">Analytics Cookies</h3>
                  <p className="text-sm text-steel-500 mt-1">
                    Help us understand how visitors interact with our website by collecting anonymous data.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-steel-100 rounded-lg">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="mt-1 h-4 w-4 accent-crimson-600"
                />
                <div>
                  <h3 className="font-semibold text-navy-950">Marketing Cookies</h3>
                  <p className="text-sm text-steel-500 mt-1">
                    Used to deliver relevant advertisements and track ad campaign performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 p-5 border-t border-steel-200">
              <button
                onClick={rejectNonEssential}
                className="px-4 py-2.5 text-sm font-medium text-steel-500 hover:text-navy-950 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={acceptSelected}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-crimson-600 hover:bg-crimson-700 rounded transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
