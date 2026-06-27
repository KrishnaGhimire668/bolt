type QueueStatusProps = {
  queued: number;
  processing: number;
  completed: number;
};

export default function QueueStatus({
  queued,
  processing,
  completed,
}: QueueStatusProps) {
  return (
    <section className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-5">
        <p className="text-sm text-yellow-300">Queued</p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          {queued}
        </h2>
      </div>

      <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-5">
        <p className="text-sm text-blue-300">Processing</p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          {processing}
        </h2>
      </div>

      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-5">
        <p className="text-sm text-emerald-300">Completed</p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          {completed}
        </h2>
      </div>
    </section>
  );
}