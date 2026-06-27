import Card from "@/components/ui/Card";
import DispatchButton from "./DispatchButton";
import PayloadViewer from "./PayloadViewer";
import { Business } from "@/types/business";

type BusinessCardProps = {
  business: Business;
};

const statusStyles = {
  online: "bg-emerald-500/20 text-emerald-400",
  processing: "bg-yellow-500/20 text-yellow-400",
  offline: "bg-red-500/20 text-red-400",
};

export default function BusinessCard({
  business,
}: BusinessCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between p-6 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10">
      <div className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white">
              {business.title}
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              {business.description}
            </p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              statusStyles[business.status]
            }`}
          >
            {business.status}
          </span>
        </div>

        <PayloadViewer payload={business.payload} />
      </div>

      <div className="mt-6">
        <DispatchButton payload={business.payload} />
      </div>
    </Card>
  );
}