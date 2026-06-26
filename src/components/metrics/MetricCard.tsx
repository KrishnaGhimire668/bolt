import Card from "@/components/ui/Card";

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
}

export default function MetricCard({
  title,
  value,
  description,
}: MetricCardProps) {
  return (
    <Card className="transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1">
      <p className="text-sm text-zinc-400">{title}</p>

      <h3 className="mt-2 text-3xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-3 text-xs text-zinc-500">
        {description}
      </p>
    </Card>
  );
}