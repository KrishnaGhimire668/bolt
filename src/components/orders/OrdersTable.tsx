const orders = [
  {
    id: "BOOK-1001",
    business: "Physical Books",
    customer: "Krishna",
    status: "Completed",
  },
  {
    id: "EBOOK-1002",
    business: "E-Books",
    customer: "Aarav",
    status: "Processing",
  },
  {
    id: "AUDIO-1003",
    business: "Audiobooks",
    customer: "Sita",
    status: "Queued",
  },
  {
    id: "THEATRE-1004",
    business: "Theatre Tickets",
    customer: "Ram",
    status: "Completed",
  },
];

export default function OrdersTable() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-xl">
      <h3 className="mb-6 text-xl font-semibold text-white">
        Recent Orders
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="border-b border-zinc-800 text-zinc-400">
            <tr>
              <th className="pb-3">Order ID</th>
              <th className="pb-3">Business</th>
              <th className="pb-3">Customer</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-zinc-800/50"
              >
                <td className="py-4">{order.id}</td>
                <td>{order.business}</td>
                <td>{order.customer}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}