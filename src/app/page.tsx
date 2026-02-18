import Header from "@/components/Header";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import BenefitCard from "@/components/BenefitCard";
import ChartCircle from "@/components/ChartCircle";
import Footer from "@/components/Footer";
import IconBar from "@/components/IconBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-14 pb-8">
        {/* הזימונים שלי - My Appointments (screenshot section) */}
        <SectionWrapper
          title="הזימונים שלי"
          titleAccent
          backgroundStyle={{ backgroundColor: "#9FE29F" }}
        >
          <div
            className="relative overflow-hidden rounded-[22px] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          >
            <span className="absolute right-0 top-0 rounded-bl-lg bg-[#5a3d7a] px-3 py-1.5 text-xs font-medium text-white">
              זימון קרוב
            </span>
            <div className="flex flex-row-reverse justify-between gap-2 pt-2">
              <div className="min-w-0 flex-1">
                <div className="mb-3 flex flex-row items-center justify-end gap-2 text-sm text-[#70C870]">
                  <span className="flex gap-0.5">
                    <span className="size-1.5 rounded-full bg-[#70C870]" />
                    <span className="size-1.5 rounded-full bg-[#70C870]" />
                    <span className="size-1.5 rounded-full bg-[#70C870]" />
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="font-medium">אושר</span>
                </div>
                <div className="mb-2 flex w-full items-center justify-start gap-2">
                  <span className="h-5 w-0.5 shrink-0 rounded-full bg-[#70C870]" aria-hidden />
                  <p className="text-lg font-bold text-gray-900">השתלמות</p>
                </div>
                <p className="mt-2 flex flex-row-reverse items-center justify-end gap-1.5 text-sm text-gray-600">
                  <span>03.02.26 - 04.03.26</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-gray-500">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </p>
                <p className="mt-1 flex flex-row-reverse items-center justify-end gap-1.5 text-sm text-gray-600">
                  <span>הקריה - מחנה רבין</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-gray-500">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </p>
              </div>
            </div>
            <div className="-mx-5 -mb-5 mt-5 flex overflow-hidden rounded-b-[22px]">
              <div className="flex flex-1 items-center justify-center rounded-br-[22px] border-t border-gray-100 bg-[#FFF8E7] py-3 font-medium text-gray-900">
                בקשות מיוחדות
              </div>
              <div className="flex flex-1 items-center justify-center rounded-bl-[22px] bg-[#FDD835] py-3 font-medium text-gray-900">
                החזרי נסיעות
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* פניות ובקשות - Requests and Applications (screenshot section) */}
        <SectionWrapper
          title="פניות ובקשות"
          titleAccent
          actionButton={{ label: "בקשה חדשה" }}
          actionButtonClassName="bg-[#70C870] text-black shrink-0 order-first"
          titleClassName="ms-6"
        >
          <div className="space-y-4">
            <Card>
              <p className="text-xs text-gray-500">עדכון אחרון: 28.01.25</p>
              <p className="mt-2 font-semibold text-gray-900">בקשת החזר - טיפול זוגי</p>
              <p className="mt-0.5 text-sm text-gray-700">למשרתי מילואים</p>
              <p className="mt-3 flex flex-row-reverse items-center justify-end gap-2 text-sm font-medium text-[#70C870]">
                <span>הפניה נסגרה</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </p>
              <p className="mt-2 text-xs text-gray-600">תאריך הפנייה: 13.01.25 | מספר הפנייה: 16068261</p>
            </Card>

            <Card>
              <div className="flex flex-row-reverse items-start gap-2">
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-500">מענקים אחרונים</p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">1,000</p>
                  <p className="mt-0.5 text-sm text-gray-600">מענק 5002 - ינואר</p>
                  <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    מענק 5002 ישולם ב-20.02.26
                  </p>
                  <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-green)]">
                    לפרטים נוספים
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                  </a>
                </div>
              </div>
              <IconBar />
            </Card>
          </div>
          <div className="mt-4 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-gray-900 shadow-[var(--card-shadow)]"
            >
              הצג הכל
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </a>
          </div>
        </SectionWrapper>

        {/* המענקים והתגמולים שלי - My Grants and Rewards */}
        <SectionWrapper
          title="המענקים והתגמולים שלי"
        >
          <Card>
            <ChartCircle
              value="5,028"
              subtext="מתוך 6,000"
              percentFilled={84}
              legend={[
                { label: "ששולמו", percent: "94.59%", color: "var(--accent-green)" },
                { label: "עתידיים", percent: "5.41%", color: "var(--accent-green-light)" },
              ]}
            />
            <IconBar />
          </Card>
        </SectionWrapper>

        {/* מילג&#39;ובס - MilJobs */}
        <SectionWrapper title="מילג'ובס">
          <div className="mb-4 flex gap-2 border-b border-gray-200">
            <button type="button" className="border-b-2 border-[var(--accent-green)] pb-2 text-sm font-semibold text-gray-900">
              מלגות פעילות
            </button>
            <button type="button" className="pb-2 text-sm text-gray-500 hover:text-gray-700">
              מלגות ששולמו
            </button>
          </div>
          <Card className="flex flex-col items-center justify-center py-12">
            <div className="flex size-20 items-center justify-center rounded-2xl bg-[var(--section-green)]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <circle cx="11.5" cy="14.5" r="2.5" />
                <line x1="14" y1="17" x2="20" y2="17" />
              </svg>
            </div>
            <p className="mt-4 text-gray-500">אין משימות פתוחות</p>
            <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-green)]">
              לפרטים נוספים
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </a>
          </Card>
        </SectionWrapper>

        {/* ההטבות שלי - My Benefits */}
        <SectionWrapper
          title="ההטבות שלי"
          subtitle="הטבות זמינות לך"
          backgroundStyle={{ backgroundColor: "#9FE29F" }}
        >
          <div className="space-y-4">
            <BenefitCard
              title="הטבה למורשים ללמוד"
              subtitle="קורס מקצועי"
              amount="2,600 ₪"
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  <path d="M8 7h8" />
                  <path d="M8 11h8" />
                </svg>
              }
            />
            <BenefitCard
              title="הטבה למגורים"
              subtitle="הנחה ברכישת דירה"
              amount="2,000 ₪"
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              }
            />
            <BenefitCard
              title="הטבה לטיסה"
              subtitle="הנחה בטיסות לחו״ל"
              amount="50%"
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              }
            />
          </div>
          <div className="mt-4 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-gray-900 shadow-[var(--card-shadow)]"
            >
              הצג הכל
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </a>
          </div>
        </SectionWrapper>

        {/* Yellow CTA card */}
        <section className="px-4 py-5 bg-[var(--section-green)]">
          <div className="mx-auto max-w-lg">
            <div className="relative overflow-hidden rounded-[20px] bg-[var(--accent-yellow)] p-5 shadow-[var(--card-shadow)]">
              <div className="absolute left-0 top-0 size-20 rounded-br-full bg-[var(--accent-yellow-soft)] opacity-80" />
              <div className="absolute bottom-0 right-0 size-16 rounded-tl-full bg-[var(--accent-yellow-soft)] opacity-80" />
              <div className="relative flex flex-row-reverse items-center gap-4">
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-900">טיפ השבוע: מצא את כל ההטבות שמגיעות לך</p>
                </div>
                <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-lg bg-white/60">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#70b858" strokeWidth="1.5">
                    <path d="M12 22v-4M12 18c-2.5 0-4-2-4-5 0-2 1-4 2-5s2-2 2-2 1 1 2 2 2 3 2 5c0 3-1.5 5-4 5z" />
                    <path d="M8 14s-2 1-2 3 1 3 2 3 2-1 2-3-2-3-2-3z" />
                    <path d="M16 14s2 1 2 3-1 3-2 3-2-1-2-3 2-3 2-3z" />
                  </svg>
                </div>
                <a href="#" className="shrink-0 text-gray-700 hover:text-gray-900">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                </a>
              </div>
            </div>
            <IconBar />
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
