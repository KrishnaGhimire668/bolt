type OrderStatusBadgeProps = {
  status: "Queued" | "Processing" | "Completed";
};

export default function OrderStatusBadge({
  status,
}: OrderStatusBadgeProps) {
  const styles = {
    Queued:
      "bg-yellow-500/20 text-yellow-400",

    Processing:
      "bg-blue-500/20 text-blue-400",

    Completed:
      "bg-emerald-500/20 text-emerald-400",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}