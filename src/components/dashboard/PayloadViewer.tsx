type PayloadViewerProps = {
  payload: object;
};

export default function PayloadViewer({
  payload,
}: PayloadViewerProps) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-xs text-emerald-400">
      {JSON.stringify(payload, null, 2)}
    </pre>
  );
}