'use client'

import React from "react";

const mockCampaigns = [
  { id: "C-001", name: "Black Week 2025", status: "Active", channel: "Email" },
  { id: "C-002", name: "Lançamento Produto X", status: "Paused", channel: "Social" },
  { id: "C-003", name: "Promo Outubro", status: "Finished", channel: "Email" },
];

export default function CampaignsListPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-20 px-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Minhas Campanhas</h1>
          <a
            href="/campaigns/create"
            className="bg-primary text-white px-4 py-2 rounded-md shadow-sm hover:bg-primary/90"
          >
            + Nova campanha
          </a>
        </div>

        <div className="bg-white border rounded-lg shadow-sm overflow-x-auto">
          <table className="w-full table-auto text-sm">
            <thead className="text-slate-600">
              <tr>
                <th className="text-left px-4 py-2">ID</th>
                <th className="text-left px-4 py-2">Nome</th>
                <th className="text-left px-4 py-2">Status</th>
                <th className="text-left px-4 py-2">Canal</th>
                <th className="px-4 py-2">Ações</th>
              </tr>
            </thead>
            <tbody className="text-slate-800">
              {mockCampaigns.map((c) => (
                <tr key={c.id} className="border-t">
                  <td className="px-4 py-3 font-mono text-xs">{c.id}</td>
                  <td className="px-4 py-3">{c.name}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
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
                  <td className="px-4 py-3">{c.channel}</td>
                  <td className="px-4 py-3 text-right">
                    <a
                      href={`/campaigns/${c.id}`}
                      className="text-primary hover:underline"
                    >
                      Ver detalhes
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
