import type{ ReactNode } from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({
  children,
}: DashboardLayoutProps){
  return(
    <div className="min-h-screen bg-zinc-950 text-white">
      <Sidebar />

      <div className="pl-64">
        <Header />

        <main className="p-8">
          {children}
        </main>

      </div>
    </div>
  )
}
