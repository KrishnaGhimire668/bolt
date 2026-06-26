import Card from "@/components/ui/Card";
import PayloadViewer from "./PayloadViewer";
import DispatchButton from "./DispatchButton";

type BusinessCardProps = {
  title: string;
  description: string;
  payload: object;
};

export default function BusinessCard({
  title,
  description,
  payload,
}: BusinessCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between p-6 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10">
      <div className="space-y-5">
        <div>
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            {description}
          </p>
        </div>

        <PayloadViewer payload={payload} />
      </div>

      <div className="mt-6">
        <DispatchButton payload={payload} />
      </div>
    </Card>
  );
}