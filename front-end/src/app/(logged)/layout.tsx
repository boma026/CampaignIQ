"use client";

import React from "react";
import Link from "next/link";

export default function DashboardLayout({ children }: {children: React.ReactNode;}) {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 pt-16">
      {/* Sidebar fixa */}
      <aside className="w-64 hidden md:flex flex-col border-r border-gray-200 bg-white">
        {/* Navegação */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link
            href="/dashboard"
            className="block px-3 py-2 rounded-md bg-blue-600 text-white font-medium"
          >
            Dashboard
          </Link>

          <Link
            href="/campaigns"
            className="block px-3 py-2 rounded-md hover:bg-gray-100"
          >
            Campanhas
          </Link>

          <Link
            href="/campaigns/create"
            className="block px-3 py-2 rounded-md hover:bg-gray-100"
          >
            Criar Campanha
          </Link>

          <Link
            href="/settings"
            className="block px-3 py-2 rounded-md hover:bg-gray-100"
          >
            Configurações
          </Link>
        </nav>

        {/* Rodapé */}
        <div className="border-t border-gray-200 p-4 text-sm text-gray-500">
          © {new Date().getFullYear()} CampaignIQ
        </div>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
