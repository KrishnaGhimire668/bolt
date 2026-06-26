import MetricsGrid from "@/components/metrics/MetricsGrid";
import BusinessCard from "./BusinessCard";

export default function Dashboard() {
  return (
    <section className="space-y-10">
      {/* Page Heading */}
      <div>
        <h2 className="text-4xl font-bold text-white">
          Operations Dashboard
        </h2>

        <p className="mt-2 text-zinc-400">
          Monitor and manage every business vertical from one
          operational workspace.
        </p>
      </div>

      {/* Metrics */}
      <MetricsGrid />

      {/* Business Verticals */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <BusinessCard
          title="Physical Books"
          description="Warehouse orders and shipping operations."
          payload={{
            type: "physical",
            orderId: "BOOK-1001",
            customer: "Krishna",
          }}
        />

        <BusinessCard
          title="E-Books"
          description="Digital purchases and instant delivery."
          payload={{
            type: "ebook",
            orderId: "EBOOK-1002",
          }}
        />

        <BusinessCard
          title="Audiobooks"
          description="Audio library distribution and fulfillment."
          payload={{
            type: "audio",
            orderId: "AUDIO-1003",
          }}
        />

        <BusinessCard
          title="Theatre Tickets"
          description="Ticket sales and event management."
          payload={{
            type: "ticket",
            orderId: "THEATRE-1004",
          }}
        />
      </section>
    </section>
  );
}