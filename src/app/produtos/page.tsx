"use client"

import React, { useState } from "react"

interface Produto {
  id: number
  nome: string
  categoria: string
  codigo: string
  preco: number
  unidadeMedida: string
  estoque: number
}

const produtosIniciais: Produto[] = [
  { id: 1, nome: "Produto A", categoria: "Categoria 1", codigo: "P001", preco: 10.0, unidadeMedida: "un", estoque: 100 },
  { id: 2, nome: "Produto B", categoria: "Categoria 2", codigo: "P002", preco: 20.0, unidadeMedida: "un", estoque: 50 },
]

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>(produtosIniciais)
  const [novoProduto, setNovoProduto] = useState<Omit<Produto, "id">>({
    nome: "",
    categoria: "",
    codigo: "",
    preco: 0,
    unidadeMedida: "",
    estoque: 0,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNovoProduto({ ...novoProduto, [name]: name === "preco" || name === "estoque" ? Number(value) : value })
  }

  const adicionarProduto = () => {
    if (!novoProduto.nome || !novoProduto.codigo) {
      alert("Nome e código são obrigatórios")
      return
    }
    const novoId = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1
    setProdutos([...produtos, { id: novoId, ...novoProduto }])
    setNovoProduto({ nome: "", categoria: "", codigo: "", preco: 0, unidadeMedida: "", estoque: 0 })
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestão de Produtos e Serviços</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Adicionar Novo Produto</h2>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={novoProduto.nome}
          onChange={handleInputChange}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="text"
          name="categoria"
          placeholder="Categoria"
          value={novoProduto.categoria}
          onChange={handleInputChange}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="text"
          name="codigo"
          placeholder="Código"
          value={novoProduto.codigo}
          onChange={handleInputChange}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={novoProduto.preco}
          onChange={handleInputChange}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="text"
          name="unidadeMedida"
          placeholder="Unidade de Medida"
          value={novoProduto.unidadeMedida}
          onChange={handleInputChange}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="number"
          name="estoque"
          placeholder="Estoque"
          value={novoProduto.estoque}
          onChange={handleInputChange}
          className="border p-2 mr-2 rounded"
        />
        <button
          onClick={adicionarProduto}
          className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark"
        >
          Adicionar
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Lista de Produtos</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Nome</th>
              <th className="border border-gray-300 p-2">Categoria</th>
              <th className="border border-gray-300 p-2">Código</th>
              <th className="border border-gray-300 p-2">Preço</th>
              <th className="border border-gray-300 p-2">Unidade de Medida</th>
              <th className="border border-gray-300 p-2">Estoque</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td className="border border-gray-300 p-2">{produto.nome}</td>
                <td className="border border-gray-300 p-2">{produto.categoria}</td>
                <td className="border border-gray-300 p-2">{produto.codigo}</td>
                <td className="border border-gray-300 p-2">R$ {produto.preco.toFixed(2)}</td>
                <td className="border border-gray-300 p-2">{produto.unidadeMedida}</td>
                <td className="border border-gray-300 p-2">{produto.estoque}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
