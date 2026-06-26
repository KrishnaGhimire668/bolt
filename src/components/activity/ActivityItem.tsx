type Activity = {
  id: number;
  title: string;
  description: string;
  time: string;
  status: "success" | "pending" | "processing";
};

type ActivityItemProps = {
  activity: Activity;
};

export default function ActivityItem({
  activity,
}: ActivityItemProps) {
  const statusStyles = {
    success: "bg-emerald-500/20 text-emerald-400",
    pending: "bg-yellow-500/20 text-yellow-400",
    processing: "bg-blue-500/20 text-blue-400",
  };

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-zinc-800 p-4 transition hover:border-emerald-500/50 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h4 className="font-medium text-white">
          {activity.title}
        </h4>

        <p className="mt-1 text-sm text-zinc-400">
          {activity.description}
        </p>
      </div>

      <div className="text-left sm:text-right">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusStyles[activity.status]}`}
        >
          {activity.status}
        </span>

        <p className="mt-2 text-xs text-zinc-500">
          {activity.time}
        </p>
      </div>
    </div>
  );
}