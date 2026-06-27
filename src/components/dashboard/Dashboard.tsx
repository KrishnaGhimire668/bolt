import MetricsGrid from "@/components/metrics/MetricsGrid";
import BusinessCard from "./BusinessCard";
import ActivityFeed from "@/components/activity/ActivityFeed";
import { Business } from "@/types/business";
import QueueStatus from "@/components/queue/QueueStatus";
import OrdersTable from "@/components/orders/OrdersTable";

const businesses: Business[] = [
  {
    id: "physical",
    title: "Physical Books",
    description: "Warehouse orders and shipping operations.",
    status: "online",
    payload: {
      type: "physical",
      orderId: "BOOK-1001",
      customer: "Krishna",
    },
  },
  {
    id: "ebook",
    title: "E-Books",
    description: "Digital purchases and instant delivery.",
    status: "processing",
    payload: {
      type: "ebook",
      orderId: "EBOOK-1002",
    },
  },
  {
    id: "audio",
    title: "Audiobooks",
    description: "Audio library distribution and fulfillment.",
    status: "online",
    payload: {
      type: "audio",
      orderId: "AUDIO-1003",
    },
  },
  {
    id: "ticket",
    title: "Theatre Tickets",
    description: "Ticket sales and event management.",
    status: "offline",
    payload: {
      type: "ticket",
      orderId: "THEATRE-1004",
    },
  },
];

export default function Dashboard() {
  
return (
  <section className="space-y-10">
    {/* Page Heading */}
    <div>
      <h2 className="text-4xl font-bold text-white">
        Operations Dashboard
      </h2>

      <p className="mt-2 text-zinc-400">
        Monitor and manage every business vertical from one operational
        workspace.
      </p>
    </div>

    {/* Global Metrics */}
    <MetricsGrid />

    {/* Job Queue */}
    <QueueStatus
      queued={8}
      processing={3}
      completed={124}
    />

    {/* Business Verticals */}
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {businesses.map((business) => (
        <BusinessCard
          key={business.id}
          business={business}
        />
      ))}
    </section>

    <OrdersTable />

    {/* Recent Activity */}
    <ActivityFeed />
  </section>
);
}