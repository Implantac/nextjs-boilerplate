"use client"

import React, { useState } from "react"

interface Produto {
  id: number
  nome: string
  preco: number
}

interface Cliente {
  id: number
  nome: string
}

interface PedidoItem {
  produto: Produto
  quantidade: number
}

interface Pedido {
  id: number
  cliente: Cliente
  itens: PedidoItem[]
  status: string
}

const produtosIniciais: Produto[] = [
  { id: 1, nome: "Produto A", preco: 10.0 },
  { id: 2, nome: "Produto B", preco: 20.0 },
]

const clientesIniciais: Cliente[] = [
  { id: 1, nome: "João Silva" },
  { id: 2, nome: "Maria Souza" },
]

export default function Pedidos() {
  const [pedidos, setPedidos] = useState<Pedido[]>([])
  const [clienteSelecionado, setClienteSelecionado] = useState<Cliente | null>(null)
  const [itensPedido, setItensPedido] = useState<PedidoItem[]>([])

  const adicionarItem = (produto: Produto) => {
    const itemExistente = itensPedido.find((item) => item.produto.id === produto.id)
    if (itemExistente) {
      setItensPedido(
        itensPedido.map((item) =>
          item.produto.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        )
      )
    } else {
      setItensPedido([...itensPedido, { produto, quantidade: 1 }])
    }
  }

  const removerItem = (produtoId: number) => {
    setItensPedido(itensPedido.filter((item) => item.produto.id !== produtoId))
  }

  const alterarQuantidade = (produtoId: number, quantidade: number) => {
    if (quantidade < 1) return
    setItensPedido(
      itensPedido.map((item) =>
        item.produto.id === produtoId ? { ...item, quantidade } : item
      )
    )
  }

  const criarPedido = () => {
    if (!clienteSelecionado) {
      alert("Selecione um cliente")
      return
    }
    if (itensPedido.length === 0) {
      alert("Adicione pelo menos um item ao pedido")
      return
    }
    const novoPedido: Pedido = {
      id: pedidos.length > 0 ? pedidos[pedidos.length - 1].id + 1 : 1,
      cliente: clienteSelecionado,
      itens: itensPedido,
      status: "Em andamento",
    }
    setPedidos([...pedidos, novoPedido])
    setClienteSelecionado(null)
    setItensPedido([])
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Processamento de Pedidos</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Novo Pedido</h2>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Cliente:</label>
          <select
            value={clienteSelecionado?.id || ""}
            onChange={(e) => {
              const cliente = clientesIniciais.find((c) => c.id === Number(e.target.value)) || null
              setClienteSelecionado(cliente)
            }}
            className="border p-2 rounded w-full"
          >
            <option value="">Selecione um cliente</option>
            {clientesIniciais.map((cliente) => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Produtos:</label>
          <div className="grid grid-cols-2 gap-2">
            {produtosIniciais.map((produto) => (
              <button
                key={produto.id}
                onClick={() => adicionarItem(produto)}
                className="border p-2 rounded hover:bg-accent hover:text-white"
              >
                {produto.nome} - R$ {produto.preco.toFixed(2)}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Itens do Pedido</h3>
          {itensPedido.length === 0 && <p>Nenhum item adicionado</p>}
          {itensPedido.map((item) => (
            <div key={item.produto.id} className="flex items-center mb-2 space-x-2">
              <span>{item.produto.nome}</span>
              <input
                type="number"
                min="1"
                value={item.quantidade}
                onChange={(e) => alterarQuantidade(item.produto.id, Number(e.target.value))}
                className="border p-1 w-16 rounded"
              />
              <button
                onClick={() => removerItem(item.produto.id)}
                className="bg-red-500 text-white px-2 rounded hover:bg-red-600"
              >
                Remover
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={criarPedido}
          className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark"
        >
          Criar Pedido
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Lista de Pedidos</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Cliente</th>
              <th className="border border-gray-300 p-2">Itens</th>
              <th className="border border-gray-300 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.id}>
                <td className="border border-gray-300 p-2">{pedido.id}</td>
                <td className="border border-gray-300 p-2">{pedido.cliente.nome}</td>
                <td className="border border-gray-300 p-2">
                  {pedido.itens.map((item) => (
                    <div key={item.produto.id}>
                      {item.produto.nome} x {item.quantidade}
                    </div>
                  ))}
                </td>
                <td className="border border-gray-300 p-2">{pedido.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
