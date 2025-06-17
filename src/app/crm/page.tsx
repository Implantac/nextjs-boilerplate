"use client"

import React, { useState } from "react"

interface Cliente {
  id: number
  nome: string
  email: string
  telefone: string
  empresa: string
}

const clientesIniciais: Cliente[] = [
  { id: 1, nome: "João Silva", email: "joao@exemplo.com", telefone: "123456789", empresa: "Empresa A" },
  { id: 2, nome: "Maria Souza", email: "maria@exemplo.com", telefone: "987654321", empresa: "Empresa B" },
]

export default function CRM() {
  const [clientes, setClientes] = useState<Cliente[]>(clientesIniciais)
  const [novoCliente, setNovoCliente] = useState<Omit<Cliente, "id">>({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNovoCliente({ ...novoCliente, [name]: value })
  }

  const adicionarCliente = () => {
    if (!novoCliente.nome || !novoCliente.email) {
      alert("Nome e email são obrigatórios")
      return
    }
    const novoId = clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1
    setClientes([...clientes, { id: novoId, ...novoCliente }])
    setNovoCliente({ nome: "", email: "", telefone: "", empresa: "" })
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestão de Clientes (CRM)</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Adicionar Novo Cliente</h2>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={novoCliente.nome}
          onChange={handleInputChange}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={novoCliente.email}
          onChange={handleInputChange}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={novoCliente.telefone}
          onChange={handleInputChange}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="text"
          name="empresa"
          placeholder="Empresa"
          value={novoCliente.empresa}
          onChange={handleInputChange}
          className="border p-2 mr-2 rounded"
        />
        <button
          onClick={adicionarCliente}
          className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark"
        >
          Adicionar
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Lista de Clientes</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Nome</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Telefone</th>
              <th className="border border-gray-300 p-2">Empresa</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td className="border border-gray-300 p-2">{cliente.nome}</td>
                <td className="border border-gray-300 p-2">{cliente.email}</td>
                <td className="border border-gray-300 p-2">{cliente.telefone}</td>
                <td className="border border-gray-300 p-2">{cliente.empresa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
