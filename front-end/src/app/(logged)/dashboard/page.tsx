"use client";

import React from "react";

const mockCampaigns = [
  { id: "C-001", name: "Black Week 2025", status: "Active", channel: "Email", created: "2025-10-01", sent: 1200, opened: 820 },
  { id: "C-002", name: "Lançamento Produto X", status: "Paused", channel: "Social", created: "2025-09-10", sent: 0, opened: 0 },
  { id: "C-003", name: "Promo Outubro", status: "Finished", channel: "Email", created: "2025-08-21", sent: 3000, opened: 1700 },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex-1 overflow-y-auto">
      {/* Compensar o header fixo */}
      <div className="pt-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Cabeçalho da página */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Visão geral</h1>
              <p className="text-sm text-slate-500">
                Resumo das suas campanhas e ações rápidas.
              </p>
            </div>
            <a
              href="/campaigns/create"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 transition"
            >
              + Nova campanha
            </a>
          </div>

          {/* KPIs */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white border rounded-lg p-4 shadow-sm">
              <div className="text-sm text-slate-500">Campanhas ativas</div>
              <div className="mt-2 text-2xl font-semibold">3</div>
            </div>
            <div className="bg-white border rounded-lg p-4 shadow-sm">
              <div className="text-sm text-slate-500">Total enviados</div>
              <div className="mt-2 text-2xl font-semibold">5.400</div>
            </div>
            <div className="bg-white border rounded-lg p-4 shadow-sm">
              <div className="text-sm text-slate-500">Abertura média</div>
              <div className="mt-2 text-2xl font-semibold">62%</div>
            </div>
            <div className="bg-white border rounded-lg p-4 shadow-sm">
              <div className="text-sm text-slate-500">Erros recentes</div>
              <div className="mt-2 text-2xl font-semibold text-amber-600">2</div>
            </div>
          </section>

          {/* Conteúdo principal dividido */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Coluna esquerda */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-white border rounded-lg p-4 shadow-sm h-56">
                <div className="text-sm text-slate-500 mb-2">
                  Tendência (últimos 7 dias)
                </div>
                <div className="h-36 w-full bg-gradient-to-r from-slate-100 to-white rounded-md flex items-center justify-center text-slate-400">
                  Gráfico simples (placeholder)
                </div>
              </div>

              <div className="bg-white border rounded-lg p-4 shadow-sm">
                <div className="text-sm text-slate-500 mb-2">Logs recentes</div>
                <ul className="text-sm space-y-2 max-h-40 overflow-auto">
                  <li className="text-slate-700">
                    [10:12] Campanha C-001 enviada (120 recipients)
                  </li>
                  <li className="text-slate-700">[09:50] Falha SMTP em C-002</li>
                  <li className="text-slate-700">[08:20] Import CSV concluído</li>
                </ul>
              </div>
            </div>

            {/* Coluna direita */}
            <div className="lg:col-span-2">
              <div className="bg-white border rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-medium">Campanhas recentes</h2>
                  <div className="text-sm text-slate-500">
                    Total: {mockCampaigns.length}
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full table-auto text-sm">
                    <thead className="text-slate-600">
                      <tr>
                        <th className="text-left px-3 py-2">ID</th>
                        <th className="text-left px-3 py-2">Nome</th>
                        <th className="text-left px-3 py-2">Status</th>
                        <th className="text-left px-3 py-2">Canal</th>
                        <th className="text-left px-3 py-2">Enviados</th>
                        <th className="text-left px-3 py-2">Abertos</th>
                        <th className="text-left px-3 py-2">Criada em</th>
                        <th className="px-3 py-2">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-800">
                      {mockCampaigns.map((c) => (
                        <tr key={c.id} className="border-t">
                          <td className="px-3 py-3 font-mono text-xs">{c.id}</td>
                          <td className="px-3 py-3">{c.name}</td>
                          <td className="px-3 py-3">
                            <span
                              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                                ${
                                  c.status === "Active"
                                    ? "bg-emerald-100 text-emerald-800"
                                    : c.status === "Paused"
                                    ? "bg-amber-100 text-amber-800"
                                    : "bg-slate-100 text-slate-800"
                                }`}
                            >
                              {c.status}
                            </span>
                          </td>
                          <td className="px-3 py-3">{c.channel}</td>
                          <td className="px-3 py-3">{c.sent}</td>
                          <td className="px-3 py-3">{c.opened}</td>
                          <td className="px-3 py-3">{c.created}</td>
                          <td className="px-3 py-3 text-right">
                            <a
                              href={`/campaigns/${c.id}`}
                              className="text-sm text-blue-600 hover:underline mr-3"
                            >
                              Ver
                            </a>
                            <button className="text-sm text-slate-600 hover:text-slate-900">
                              Pausar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <footer className="text-sm text-slate-500 py-6">
            © {new Date().getFullYear()} CampaignIQ — Dashboard demo
          </footer>
        </div>
      </div>
    </div>
  );
}
