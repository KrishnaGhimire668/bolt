import MetricCard from "@/components/metrics/MetricCard";

export default function MetricsGrid() {
  return (
    <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <MetricCard
        title="Orders Today"
        value="146"
        description="+12% from yesterday"
      />

      <MetricCard
        title="Webhook Success"
        value="99.2%"
        description="Healthy automation"
      />

      <MetricCard
        title="Pending Queue"
        value="4"
        description="Waiting for processing"
      />

      <MetricCard
        title="Avg Processing"
        value="210 ms"
        description="Excellent performance"
      />
    </section>
  );
}