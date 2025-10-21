'use client'

import React from "react";

export default function CreateCampaignPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 px-6">
      <div className="max-w-[700px] mx-auto bg-white border rounded-lg p-8 shadow-sm">
        <h1 className="text-2xl font-semibold mb-6">Criar nova campanha</h1>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nome da campanha</label>
            <input
              type="text"
              placeholder="Ex: Black Friday 2025"
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Canal</label>
            <select
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <option>Email</option>
              <option>Social</option>
              <option>SMS</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
            <textarea
              rows={5}
              placeholder="Digite o conteúdo da campanha..."
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-5 py-2 rounded-md hover:bg-primary/90 transition"
          >
            Criar campanha
          </button>
        </form>
      </div>
    </div>
  );
}
