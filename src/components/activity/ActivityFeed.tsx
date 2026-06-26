const activities = [
  {
    id: 1,
    title: "Physical Book Order",
    description: "Webhook dispatched successfully.",
    time: "2 min ago",
    status: "success",
  },
  {
    id: 2,
    title: "E-Book Purchase",
    description: "Waiting for n8n workflow.",
    time: "5 min ago",
    status: "pending",
  },
  {
    id: 3,
    title: "Audiobook Delivery",
    description: "Sent to customer.",
    time: "12 min ago",
    status: "success",
  },
  {
    id: 4,
    title: "Theatre Ticket",
    description: "Payment verification running.",
    time: "18 min ago",
    status: "processing",
  },
];

export default function ActivityFeed() {
  return (
    <section className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-xl">
      <h3 className="mb-6 text-xl font-semibold text-white">
        Recent Activity
      </h3>

      <div className="space-y-5">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start justify-between rounded-xl border border-zinc-800 p-4 transition hover:border-emerald-500/50"
          >
            <div>
              <h4 className="font-medium text-white">
                {activity.title}
              </h4>

              <p className="mt-1 text-sm text-zinc-400">
                {activity.description}
              </p>
            </div>

            <div className="text-right">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  activity.status === "success"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : activity.status === "pending"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-blue-500/20 text-blue-400"
                }`}
              >
                {activity.status}
              </span>

              <p className="mt-2 text-xs text-zinc-500">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}