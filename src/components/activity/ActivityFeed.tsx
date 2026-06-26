import ActivityItem from "./ActivityItem";

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
          <ActivityItem
            key={activity.id}
            activity={activity}
          />
        ))}
      </div>
    </section>
  );
}