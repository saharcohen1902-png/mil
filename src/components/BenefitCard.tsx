import Card from "./Card";

type BenefitCardProps = {
  title: string;
  subtitle?: string;
  amount?: string;
  icon: React.ReactNode;
};

export default function BenefitCard({ title, subtitle, amount, icon }: BenefitCardProps) {
  return (
    <Card className="flex flex-row-reverse items-center gap-4">
      <div className="min-w-0 flex-1">
        <p className="font-medium text-gray-900">{title}</p>
        {subtitle && <p className="mt-0.5 text-sm text-gray-500">{subtitle}</p>}
        {amount && <p className="mt-1 text-sm font-semibold text-gray-800">{amount}</p>}
      </div>
      <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[var(--section-green)] text-[var(--accent-green)]">
        {icon}
      </div>
    </Card>
  );
}
