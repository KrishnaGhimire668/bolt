export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 font-bold text-zinc-950">
            K
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              KathaKora
            </h1>

            <p className="text-xs text-zinc-400">
              Operations Platform
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />

          <span className="text-sm font-medium text-emerald-400">
            Webhook Connected
          </span>
        </div>
      </div>
    </header>
  );
}