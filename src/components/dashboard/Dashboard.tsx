import MetricsGrid from "@/components/metrics/MetricsGrid";

export default function Dashboard() {
  return (
    <section>
      <div>
        <h2 className="text-4xl font-bold text-white">
          Operations Dashboard
        </h2>

        <p className="mt-2 text-zinc-400">
          Monitor operational workflows across books,
          e-books, audiobooks, and theatre ticketing.
        </p>
      </div>

      <MetricsGrid />
    </section>
  );
}


