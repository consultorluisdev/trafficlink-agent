import { Bot } from 'lucide-react';
import type React from 'react';

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page heading */}
      <section>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-400">
          Marketing Intelligence
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight">Good afternoon, Luis.</h2>
        <p className="mt-2 text-sm text-zinc-500">Your markenting agent is ready to work.</p>
      </section>

      {/* metrics */}
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Metric
          label="Content analyzed"
          value="128"
          detail="+18% this week"
          icon={<Bot size={17} />}
        />

        <Metric
          label="Opportunities"
          value="8.4%"
          detail="+18% new leads"
          icon={<Bot size={17} />}
        />

        <Metric
          label="Ad efficiency"
          value="3.8x"
          detail="+18% this week"
          icon={<Bot size={17} />}
        />
      </section>

      {/* Welcome panel */}
      <section className="rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-900 to-zinc-950 p-8">
        <div className="max-w-2xl">
          <span className="rounded-full border border-zinc-500/20 bg-violet-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
            AI Marketing Agent
          </span>

          <h3 className="mt-5 text-2xl font-bold">Turn attention int real opportunities.</h3>

          <p className="mt-3 text-sm leading-6 text-zinc-500">
            TRÁFICLINK analyzes your content, audience and campaigns to help your business make
            better marketing decisions.
          </p>
        </div>
      </section>
    </div>
  );
}

type MetricProps = {
  label: string;
  value: string;
  detail: string;
  icon: React.ReactNode;
};

function Metric({ label, value, detail, icon }: MetricProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs text-zinc-500">{label}</span>

        <div className="rounded-lg bg-violet-500/10 p-2 text-violet-400">{icon}</div>
      </div>
      <strong className="mt-4 block text-2xl font-bold">{value}</strong>

      <span className="mt-1 block text-[10px] text-emerald-400">{detail}</span>
    </div>
  );
}
