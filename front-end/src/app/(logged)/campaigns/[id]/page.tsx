'use client'

import React from "react";
import { useParams } from "next/navigation";

export default function CampaignDetailPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-slate-50 pt-20 px-6">
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-2xl font-semibold mb-2">Detalhes da campanha</h1>
        <p className="text-slate-500 mb-6">Campanha ID: {id}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-medium mb-2">Informações</h2>
            <ul className="text-sm text-slate-700 space-y-1">
              <li><strong>Nome:</strong> Campanha {id}</li>
              <li><strong>Status:</strong> Ativa</li>
              <li><strong>Canal:</strong> Email</li>
              <li><strong>Criada em:</strong> 10/10/2025</li>
            </ul>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-medium mb-2">Métricas</h2>
            <ul className="text-sm text-slate-700 space-y-1">
              <li><strong>Enviados:</strong> 1200</li>
              <li><strong>Abertos:</strong> 820</li>
              <li><strong>Cliques:</strong> 340</li>
              <li><strong>Taxa de abertura:</strong> 68%</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-medium mb-3">Atividades recentes</h2>
          <ul className="text-sm text-slate-700 space-y-2">
            <li>[10:12] E-mail enviado para 120 destinatários</li>
            <li>[09:00] Campanha atualizada</li>
            <li>[08:45] Lista de contatos importada</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
