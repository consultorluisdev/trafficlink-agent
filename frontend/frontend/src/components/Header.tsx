import { Bell, Search, Command } from 'lucide-react';

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-800 px-8">
      {/* Seacrh */}
      <div className="flex w-full max-w-md items-center gap-3 rounded-lg border border-zinc-900/50 px-3 py-2">
        <Search size={16} className="text-zinc-600" />

        <input
          type="text"
          placeholder="Search TRÁFICLINK..."
          className="flex-1 bg-transparent text-xs text-zinc-300 outline-none placeholder:text-zinc-600"
        />

        <div className="flex items-center gap-1 rounded border border-b-zinc-800 px-1.5 py-1 text-[9px] text-zinc-600">
          <Command size={10} />K
        </div>
      </div>
      {/* Actions */}
      <div className="ml-6 flex items-center gap-4">
        <button className="relative text-zinc-500 transition hover:text-zinc-200">
          <Bell size={18} />
          <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-red-500" />
        </button>
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-indigo-600 text-[10px] font-bold">
            LC
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-medium text-zinc-200">Luis</p>
            <p className="text-[10px] text-zinc-600">Workspace</p>
          </div>
        </div>
      </div>
    </header>
  );
}
