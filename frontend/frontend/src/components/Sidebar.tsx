import {
  BarChart3,
  Bot,
  CalendarDays,
  CircleDollarSign,
  FileText,
  LayoutDashboard,
  Settings,
  Sidebar,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

const navigationItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
  }
  {
    label: "AI Agent",
    icon: Bot,
  }
  {
    label: "Content",
    icon: FileText,
  }
  {
    label: "Audience",
    icon: Users,
  }
  {
    label: "Paid Traffic",
    icon: CircleDollarSign,
  }
  {
    label: "Analytics",
    icon: BarChart3,
  }
  {
    label: "Calendar",
    icon: CalendarDays
  },
];
export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-zinc-800 bg-zinc-950 px-4 py-5 text-white">
      {/* Brand*/}
      <div className="flex items-center gap-3 px-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/20">
          <Zap size={18} fill="currentColor" />
        </div>

        <div>
          <h1 className="text-sm font-bold tracking-wide">
            TRÁFICLINK
          </h1>

          <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-500">
            AI Markenting
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-10 flex-1">
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
          Workpace
        </p>
        <div className="space-y-1">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            const active = index === 0;

            return (
              <button
                key={item.label}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${active
                  ? "bg-violet-600/15 text-white shadow-[insert_2px_0_0#8b5cf6]"
                  : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-200"
                  }`}
              >
                <Icon size={17} />

                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Agent Status */}
      <div className="mb-4 rounded-xl border border-zinc-800 bg-zinc-900/70 p-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />

          <span className="text-xs font-medium text-zinc-200">
            Agent online
          </span>
        </div>

        <p className="mt-1 pl-4 text-[10px] text-zinc-600">
          Rust / Axum
        </p>
      </div>

      {/* Settings */}
      <button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-500 transition hover:bg-zinc-900 hover:text-zinc-200">
        <Settings size={17} />
        <span>Settings</span>
      </button>

      {/* Workspace */}
      <div className="mt-4 flex items-center gap-3 border-t border-zinc-800 pt-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-bold text-zinc-300">
          LC
        </div>

        <div>
          <p className="text-xs font-medium text-zinc-300">
            Workspace
          </p>
          <p className="text-[10px] text-zinc-600">
            Local envoriment
          </p>
        </div>
      </div>
    </aside>
  );
}
