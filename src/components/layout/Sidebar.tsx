const navigation = [
  {
    id: "physical",
    name: "Physical Books",
    icon: "📚",
  },
  {
    id: "ebook",
    name: "E-Books",
    icon: "📖",
  },
  {
    id: "audio",
    name: "Audiobooks",
    icon: "🎧",
  },
  {
    id: "ticket",
    name: "Theatre Tickets",
    icon: "🎭",
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-zinc-800 bg-zinc-950 lg:block">
      <div className="p-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Business Verticals
        </p>

        <nav className="space-y-2">
          {navigation.map((item) => (
            <button
              key={item.id}
              className="flex w-full items-center gap-3 rounded-xl border border-transparent px-4 py-3 text-left transition-all duration-200 hover:border-emerald-500/30 hover:bg-zinc-900 hover:text-emerald-400"
            >
              <span className="text-xl">{item.icon}</span>

              <span className="font-medium text-zinc-300">
                {item.name}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}